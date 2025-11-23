from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required, user_passes_test
from django.shortcuts import get_object_or_404, redirect, render
from .models import CRMTeam
import threading
from typing import Iterable, List
import logging, time
from django.core.mail import EmailMessage

def staff_check(user):
    return user.is_staff or user.is_superuser





logger = logging.getLogger("email_debug")

def _send_mail_async(subject: str, message: str, recipients: list):
    try:
        if not recipients:
            logger.warning("No recipients found")
            return

        BATCH_SIZE = 50
        prefixed_subject = f"[{getattr(settings, 'EVENT_NAME', 'Event')}] {subject}"
        from_email = getattr(settings, "DEFAULT_FROM_EMAIL", None)

        def send_with_retry(email_obj, retries=3, delay=5):
            """Send email with retry + exponential backoff."""
            for attempt in range(1, retries + 1):
                try:
                    email_obj.send()
                    return
                except Exception as e:
                    logger.error(f"Attempt {attempt} failed: {e}", exc_info=True)
                    if attempt < retries:
                        sleep_time = delay * (2 ** (attempt - 1))
                        logger.info(f"Retrying in {sleep_time}s...")
                        time.sleep(sleep_time)
                    else:
                        raise

        for i in range(0, len(recipients), BATCH_SIZE):
            chunk = recipients[i : i + BATCH_SIZE]
            for recipient in chunk:
                email_obj = EmailMessage(
                    subject=prefixed_subject,
                    body=message,
                    from_email=from_email,
                    to=[recipient],
                )
                try:
                    send_with_retry(email_obj)
                    logger.info(f"Email sent to {recipient}")
                except Exception as e:
                    logger.error(f"Failed to send to {recipient} after retries: {e}", exc_info=True)

    except Exception as outer_e:
        logger.critical(f"Error in email sending thread: {outer_e}", exc_info=True)




@login_required
@user_passes_test(staff_check)
def dashboard(request):
    teams = CRMTeam.objects.all().order_by("-id")
    return render(request, "dashboard.html", {"teams": teams})


@login_required
@user_passes_test(staff_check)
def update_team_status(request, team_id: int):
    team = get_object_or_404(CRMTeam, id=team_id)

    if request.method == "POST":
        new_status = request.POST.get("status") or team.status
        notes = request.POST.get("notes", team.notes)
        team.status = new_status
        team.notes = notes
        team.save()
        messages.success(request, f"Updated {team.Team_name} → {team.status}")
    return redirect("dashboard")


@login_required
@user_passes_test(staff_check)
def send_bulk_email(request):
    if request.method == "POST":
        recipient_option = request.POST.get("recipient_option", "selected_checkbox")
        subject = (request.POST.get("subject") or "").strip()
        message = (request.POST.get("message") or "").strip()

        if not subject or not message:
            messages.error(request, "Subject and message are required.")
            return redirect("dashboard")

        recipients_qs: Iterable[str] = []

        if recipient_option == "selected_checkbox":
            team_ids = request.POST.getlist("team_ids")
            recipients_qs = CRMTeam.objects.filter(
                id__in=team_ids
            ).values_list("leader_email", flat=True)

        elif recipient_option == "all":
            recipients_qs = CRMTeam.objects.values_list("leader_email", flat=True)

        elif recipient_option == "status_selected":
            recipients_qs = CRMTeam.objects.filter(
                status="SELECTED"
            ).values_list("leader_email", flat=True)

        elif recipient_option == "status_not_selected":
            recipients_qs = CRMTeam.objects.filter(
                status="NOT_SELECTED"
            ).values_list("leader_email", flat=True)

        elif recipient_option == "filter_notes":
            notes_filter = (request.POST.get("notes_filter") or "").strip()
            recipients_qs = CRMTeam.objects.filter(
                notes__icontains=notes_filter
            ).values_list("leader_email", flat=True)

        recipients = [e for e in set(recipients_qs) if e]

        if not recipients:
            messages.warning(request, "No matching recipients found.")
            return redirect("dashboard")

w        t = threading.Thread(target=_send_mail_async, args=(subject, message, recipients))
        t.start()

        messages.success(request, f"Email task queued for {len(recipients)} recipients.")
        return redirect("dashboard")

    return redirect("dashboard")
