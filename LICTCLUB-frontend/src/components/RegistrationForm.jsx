import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';

// Section component for RulesPopup and PrivacyPolicyPopup
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2 text-left">{title}</h3>
    {children}
  </div>
);

const RulesPopup = ({ onClose }) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md text-gray-800 max-h-[80vh] overflow-y-auto text-left"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 font-bold text-xl"
            aria-label="Close rules popup"
          >
            &times;
          </button>
        </div>
        <h2 className="text-3xl font-extrabold mb-6 text-left">
          Lumbini ICT Club Hackathon – Rules & Guidelines
        </h2>

        <Section title="Event Overview">
          <ul className="list-disc list-inside space-y-1">
            <li>Event Duration: 3 Days</li>
            <li>Active Coding Period: 48 continuous hours</li>
            <li>Team Formation Deadline: 30 Shrawan 2082</li>
            <li>Venue: Lumbini ICT Campus</li>
            <li>Date: Bhadra 16, 17, 18</li>
          </ul>
        </Section>

        <Section title="Team & Participation Rules">
          <ul className="list-disc list-inside space-y-1">
            <li>Each participant must register as part of a team. Individual registrations without a team are not allowed.</li>
            <li>All Team Members must be from same college.</li>
            <li>Team size must be between 3 to 4 members.</li>
            <li>All team members must be officially registered before registration is closed. No last-minute team changes are permitted.</li>
            <li>Participants must be physically present at the venue throughout the event.</li>
            <li>Each participant must carry a valid ID proof (e.g., student ID etc).</li>
            <li>Participants are expected to maintain decorum, discipline, and respect toward all teams, mentors, and organizers.</li>
          </ul>
        </Section>

        <Section title="Project & Coding Rules">
          <ul className="list-disc list-inside space-y-1">
            <li>Projects must be developed entirely during the hackathon. No prior work or codebase is allowed except publicly available libraries.</li>
            <li>Originality is mandatory — plagiarized or copied projects will be immediately disqualified.</li>
            <li>Teams may use public APIs, libraries, frameworks, and open-source tools as long as they are disclosed.</li>
            <li>Projects must be submitted with a README file, source code, and a short documentation or pitch deck.</li>
            <li>Code must be your own. Usage of AI tools like GitHub, Copilot or ChatGPT, etc is allowed only if declared and used ethically.</li>
            <li>The final project must be functional or demonstrable — incomplete or concept-only projects may not be evaluated fully.</li>
          </ul>
        </Section>

        <Section title="Time & Submission Guidelines">
          <ul className="list-disc list-inside space-y-1">
            <li>Coding begins strictly at the designated start time and ends after 48 hours.</li>
            <li>Submissions made after the deadline will not be accepted.</li>
            <li>All teams must upload their code to a GitHub repository or zip file and provide the access link.</li>
            <li>Each team will be allotted a specific slot for the final project presentation. Late arrival may lead to skipped evaluation.</li>
            <li>Each team must present a 5-10 minute live pitch explaining the project.</li>
            <li>Submissions should include setup instructions to help judges review your project.</li>
          </ul>
        </Section>

        <Section title="Innovation & Idea Rules">
          <ul className="list-disc list-inside space-y-1">
            <li>Ideas must solve a real-world problem or present an innovative use of technology.</li>
            <li>Projects must be original and not previously submitted to any other competition.</li>
            <li>You may brainstorm ideas before the hackathon, but no coding should happen before the event.</li>
            <li>Refrain from choosing ideas that violate ethical, cultural, or legal boundaries.</li>
            <li>If your project uses third-party data, it must be from a legal and ethical source.</li>
            <li>Teams must be ready to justify their idea, technical choices, and user impact during the pitch.</li>
          </ul>
        </Section>

        <Section title="Code of Conduct & Ethics">
          <ul className="list-disc list-inside space-y-1">
            <li>Any form of cheating, sabotage, or dishonesty will result in immediate disqualification.</li>
            <li>Maintain a supportive and inclusive environment — harassment or discriminatory behavior will not be tolerated.</li>
            <li>Respect other participant's ideas, devices, and workspace.</li>
            <li>Use only licensed and authorized software/tools.</li>
            <li>Do not attempt to tamper with the event systems, judging software, or other teams work.</li>
            <li>All participants must adhere to venue rules, safety protocols, and instructions from organizers.</li>
          </ul>
        </Section>

        <Section title="Logistics, Hardware & Internet Use">
          <ul className="list-disc list-inside space-y-1">
            <li>Participants must bring their own laptops, chargers, extension cords, and other required devices.</li>
            <li>A stable internet connection will be provided, but backup plans (hotspot, power bank) are recommended.</li>
            <li>Use of external storage devices (USB drives, HDDs) should not include pre-written code.</li>
            <li>Participants are responsible for the safety of their own equipment.</li>
            <li>Any attempt to misuse provided hardware or internet for unauthorized purposes is prohibited.</li>
            <li>Basic amenities such as water, snacks, and resting zones will be provided during the event.</li>
          </ul>
        </Section>

        <Section title="Judging Criteria">
          <ul className="list-disc list-inside space-y-1">
            <li>Innovation & Creativity – How unique and original is the idea?</li>
            <li>Technical Implementation – How well was the solution developed technically?</li>
            <li>Functionality – Does the solution work as intended and solve the problem?</li>
            <li>User Experience & Design – Is the UI/UX intuitive and polished?</li>
            <li>Presentation – How effectively was the project presented during the final pitch?</li>
            <li>Impact & Relevance – Does the solution have real-world impact or market potential?</li>
            <li>Sustainability – How sustainable is the project over time?</li>
          </ul>
        </Section>

        <Section title="Venue Rules & Safety Protocols">
          <h4 className="font-semibold mb-2 text-left">Entry & Exit</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>All participants must check in at the registration desk upon arrival.</li>
            <li>Entry will be allowed only to registered participants wearing valid ID badges.</li>
            <li>Entry and exit times may be logged for security reasons; late-night movement may require organizer permission.</li>
          </ul>

          <h4 className="font-semibold mb-2 text-left">Cleanliness & Hygiene</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Please keep your working area clean and dispose of waste in the designated bins.</li>
            <li>Use restrooms and refreshment areas responsibly.</li>
            <li>Personal hygiene must be maintained throughout the event.</li>
          </ul>

          <h4 className="font-semibold mb-2 text-left">Noise & Disturbance</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Avoid loud music, shouting, or behavior that disturbs other teams.</li>
            <li>Respect quiet hours or designated rest areas if provided.</li>
            <li>Phone calls should be taken outside the main workspace, if possible.</li>
          </ul>

          <h4 className="font-semibold mb-2 text-left">Sleeping & Rest Areas</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Personal sleeping gear (blankets, mats, etc.) is allowed.</li>
            <li>Do not block aisles or emergency exits with sleeping materials or bags.</li>
          </ul>

          <h4 className="font-semibold mb-2 text-left">Prohibited Items & Behavior</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Alcohol, drugs, smoking, and any flammable materials are strictly prohibited inside the venue.</li>
            <li>Weapons or sharp objects of any kind are not allowed.</li>
            <li>Any participant found violating these rules will be immediately disqualified and asked to leave.</li>
          </ul>

          <h4 className="font-semibold mb-2 text-left">Emergency & First Aid</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>In case of any medical emergency, immediately notify the nearest volunteer or organizer.</li>
            <li>First-aid kits will be available at the help desk; emergency contact numbers will be shared at check-in.</li>
            <li>A designated team will be on standby for health or security support throughout the event.</li>
          </ul>

          <h4 className="font-semibold mb-2 text-left">Fire & Electrical Safety</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Do not overload power sockets or use faulty cables.</li>
            <li>Tampering with electrical equipment or venue infrastructure is strictly prohibited.</li>
            <li>Familiarize yourself with emergency exits and fire extinguisher locations upon arrival.</li>
          </ul>

          <h4 className="font-semibold mb-2 text-left">Reporting Issues</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>A dedicated help desk will be available 24/7 to handle any concerns.</li>
            <li>Report any suspicious activity, lost items, or misconduct to the organizers immediately.</li>
          </ul>
        </Section>
      </motion.div>
    </div>
  );
};

const PrivacyPolicyPopup = ({ onClose }) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md text-gray-800 max-h-[80vh] overflow-y-auto text-left"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 font-bold text-xl"
            aria-label="Close privacy policy popup"
          >
            &times;
          </button>
        </div>
        <h2 className="text-3xl font-extrabold mb-6 text-left">
          Privacy Policy
        </h2>

        <Section title="Our Commitment to Your Privacy">
          <p className="mb-4">
            We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>We collect only the necessary information to provide and improve our services.</li>
            <li>Your personal data will never be sold or shared with third parties without your consent, except as required by law.</li>
            <li>All user information is stored securely, and we take appropriate measures to prevent unauthorized access.</li>
            <li>You have the right to access, update, or delete your personal information at any time.</li>
            <li>By using our services, you agree to the terms outlined in this Privacy Policy.</li>
            <li>If you have any questions or concerns about how your data is handled, please contact us.</li>
          </ul>
        </Section>
      </motion.div>
    </div>
  );
};

export default function RegistrationForm() {
  const [teamSize, setTeamSize] = useState(3);
  const [paymentProof, setPaymentProof] = useState(null);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [errors, setErrors] = useState({
    general: '',
    teamName: '',
    city: '',
    projectIdea: '',
    theme: '',
    techStack: '',
    institution: '',
    paymentProof: '',
    agreed: '',
    members: Array.from({ length: 4 }, () => ({
      fullName: '',
      email: '',
      phone: '',
      tshirt: '',
      foodPreference: '',
      gender: ''
    }))
  });

  const [formData, setFormData] = useState({
    teamName: '',
    city: '',
    projectIdea: '',
    theme: '',
    techStack: '',
    institution: '',
    members: Array.from({ length: 4 }, () => ({
      fullName: '',
      email: '',
      phone: '',
      tshirt: '',
      foodPreference: '',
      gender: '',
    })),
    agreed: false,
  });

  const today = new Date();
  const lastSubmissionDate = new Date('2025-08-17T23:59:59');
  const isPastDeadline = today > lastSubmissionDate;

  const sanitize = (str) => DOMPurify.sanitize(str.trim());

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9+\-\s()]{7,15}$/.test(phone);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleTeamSizeChange = (e) => {
    const size = parseInt(e.target.value, 10);
    setTeamSize(size);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: value,
    };
    setFormData({ ...formData, members: updatedMembers });
    
    // Clear error when field is changed
    if (errors.members[index]?.[field]) {
      setErrors(prev => {
        const newErrors = {...prev};
        newErrors.members[index][field] = '';
        return newErrors;
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith('image/')) {
      setErrors(prev => ({
        ...prev,
        paymentProof: 'Please upload a valid image file (e.g., PNG, JPEG).'
      }));
      setPaymentProof(null);
      return;
    }
    setErrors(prev => ({...prev, paymentProof: ''}));
    setPaymentProof(file);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      general: '',
      teamName: '',
      city: '',
      projectIdea: '',
      theme: '',
      techStack: '',
      institution: '',
      paymentProof: '',
      agreed: '',
      members: Array.from({ length: 4 }, () => ({
        fullName: '',
        email: '',
        phone: '',
        tshirt: '',
        foodPreference: '',
        gender: ''
      }))
    };

    // Validate team fields
    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
      isValid = false;
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      isValid = false;
    }
    if (!formData.projectIdea.trim()) {
      newErrors.projectIdea = 'Project idea is required';
      isValid = false;
    }
    if (!formData.theme.trim()) {
      newErrors.theme = 'Theme is required';
      isValid = false;
    }
    if (!formData.techStack.trim()) {
      newErrors.techStack = 'Tech stack is required';
      isValid = false;
    }
    if (!formData.institution.trim()) {
      newErrors.institution = 'Institution is required';
      isValid = false;
    }
    if (!paymentProof) {
      newErrors.paymentProof = 'Payment proof is required';
      isValid = false;
    }
    if (!formData.agreed) {
      newErrors.agreed = 'You must agree to the terms';
      isValid = false;
    }

    // Validate team members
    for (let i = 0; i < teamSize; i++) {
      const member = formData.members[i];
      
      if (!member.fullName.trim()) {
        newErrors.members[i].fullName = 'Full name is required';
        isValid = false;
      }
      if (!member.email.trim()) {
        newErrors.members[i].email = 'Email is required';
        isValid = false;
      } else if (!isValidEmail(member.email)) {
        newErrors.members[i].email = 'Invalid email format';
        isValid = false;
      }
      if (!member.phone.trim()) {
        newErrors.members[i].phone = 'Phone number is required';
        isValid = false;
      } else if (!isValidPhone(member.phone)) {
        newErrors.members[i].phone = 'Invalid phone number';
        isValid = false;
      }
      if (!member.gender) {
        newErrors.members[i].gender = 'Gender is required';
        isValid = false;
      }
      if (!member.tshirt) {
        newErrors.members[i].tshirt = 'T-shirt size is required';
        isValid = false;
      }
      if (!member.foodPreference) {
        newErrors.members[i].foodPreference = 'Food preference is required';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    const sanitizedData = {
      teamName: sanitize(formData.teamName),
      city: sanitize(formData.city),
      projectIdea: sanitize(formData.projectIdea),
      theme: sanitize(formData.theme),
      techStack: sanitize(formData.techStack),
      institution: sanitize(formData.institution),
      members: formData.members.map((member) => ({
        fullName: sanitize(member.fullName),
        email: sanitize(member.email),
        phone: sanitize(member.phone),
        tshirt: sanitize(member.tshirt),
        foodPreference: sanitize(member.foodPreference),
        gender: sanitize(member.gender)
      })),
      agreed: formData.agreed,
    };

    const payload = new FormData();
    payload.append('team_name', sanitizedData.teamName);
    payload.append('city', sanitizedData.city);
    payload.append('project_idea', sanitizedData.projectIdea);
    payload.append('theme', sanitizedData.theme);
    payload.append('tech_stack', sanitizedData.techStack);
    payload.append('payment_proof', paymentProof);
    payload.append('institution', sanitizedData.institution);

    sanitizedData.members.slice(0, teamSize).forEach((member, index) => {
      payload.append(`members[${index}][full_name]`, member.fullName);
      payload.append(`members[${index}][email]`, member.email);
      payload.append(`members[${index}][phone]`, member.phone);
      payload.append(`members[${index}][gender]`, member.gender);
      payload.append(`members[${index}][tshirt]`, member.tshirt);
      payload.append(`members[${index}][food_preference]`, member.foodPreference);
    });

    try {
      const response = await fetch('https://api.lumbiniictclub.com/api/teams/', {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message || 'Registered successfully!');
        // Reset form
        setFormData({
          teamName: '',
          city: '',
          projectIdea: '',
          theme: '',
          techStack: '',
          institution: '',
          members: Array.from({ length: 4 }, () => ({
            fullName: '',
            email: '',
            phone: '',
            tshirt: '',
            foodPreference: '',
            gender: '',
          })),
          agreed: false,
        });
        setPaymentProof(null);
        setTeamSize(3);
        setErrors({
          general: '',
          teamName: '',
          city: '',
          projectIdea: '',
          theme: '',
          techStack: '',
          institution: '',
          paymentProof: '',
          agreed: '',
          members: Array.from({ length: 4 }, () => ({
            fullName: '',
            email: '',
            phone: '',
            tshirt: '',
            foodPreference: '',
            gender: ''
          }))
        });
      } else {
        setErrors(prev => ({
          ...prev,
          general: `Submission failed: ${data.message || JSON.stringify(data)}`
        }));
      }
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        general: 'Error submitting form. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50 text-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <form
        id="registration"
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-left">Team Registration Form</h2>
        <p className="text-gray-600 mb-6 text-left">Register your team of 3–4 members for the 48-hour hackathon</p>

        {errors.general && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {errors.general}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <input
              type="text"
              name="teamName"
              placeholder="Team Name"
              className={`border p-2 rounded w-full ${errors.teamName ? 'border-red-500' : ''}`}
              value={formData.teamName}
              onChange={handleInputChange}
              required
              aria-label="Team Name"
            />
            {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
          </div>
          
          <div>
            <select
              value={teamSize}
              onChange={handleTeamSizeChange}
              className="border p-2 rounded w-full"
              required
              aria-label="Team Size"
            >
              <option value="3">3 Members</option>
              <option value="4">4 Members</option>
            </select>
          </div>
          
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              className={`border p-2 rounded w-full ${errors.city ? 'border-red-500' : ''}`}
              value={formData.city}
              onChange={handleInputChange}
              required
              aria-label="City"
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>
          
          <div>
            <input
              type="text"
              name="theme"
              placeholder="Themes  *Choose atleast 3 Themes"
              className={`border p-2 rounded w-full ${errors.theme ? 'border-red-500' : ''}`}
              value={formData.theme}
              onChange={handleInputChange}
              required
              aria-label="Themes"
            />
            {errors.theme && <p className="text-red-500 text-sm mt-1">{errors.theme}</p>}
          </div>
          
          <div>
            <input
              type="text"
              name="techStack"
              placeholder="Tech Stack (e.g. MERN, Django + React)"
              className={`border p-2 rounded w-full ${errors.techStack ? 'border-red-500' : ''}`}
              value={formData.techStack}
              onChange={handleInputChange}
              required
              aria-label="Tech Stack"
            />
            {errors.techStack && <p className="text-red-500 text-sm mt-1">{errors.techStack}</p>}
          </div>
          
          <div>
            <input 
              type="text"
              name="institution"
              placeholder="Institution"
              className={`border p-2 rounded w-full ${errors.institution ? 'border-red-500' : ''}`}
              value={formData.institution}
              onChange={handleInputChange}
              required
              aria-label="institution"
            />
            {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
          </div>
        </div>

        <div className="mb-6">
          <textarea
            name="projectIdea"
            placeholder="Theme idea 1 - Description, Theme idea 2 - Description, Theme idea 3 - Description"
            className={`border p-2 rounded w-full ${errors.projectIdea ? 'border-red-500' : ''}`}
            rows="4"
            value={formData.projectIdea}
            onChange={handleInputChange}
            required
            aria-label="Project Idea"
          />
          {errors.projectIdea && <p className="text-red-500 text-sm mt-1">{errors.projectIdea}</p>}
        </div>

        {[...Array(teamSize)].map((_, i) => (
          <React.Fragment key={i}>
            <h3 className="text-xl font-semibold mb-2 text-left">Team Member {i + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-100 p-4 rounded mb-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`border p-2 rounded w-full ${errors.members[i]?.fullName ? 'border-red-500' : ''}`}
                  value={formData.members[i].fullName}
                  onChange={(e) => handleMemberChange(i, 'fullName', e.target.value)}
                  required
                  aria-label={`Member ${i + 1} Full Name`}
                />
                {errors.members[i]?.fullName && <p className="text-red-500 text-sm mt-1">{errors.members[i].fullName}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`border p-2 rounded w-full ${errors.members[i]?.email ? 'border-red-500' : ''}`}
                  value={formData.members[i].email}
                  onChange={(e) => handleMemberChange(i, 'email', e.target.value)}
                  required
                  aria-label={`Member ${i + 1} Email`}
                />
                {errors.members[i]?.email && <p className="text-red-500 text-sm mt-1">{errors.members[i].email}</p>}
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`border p-2 rounded w-full ${errors.members[i]?.phone ? 'border-red-500' : ''}`}
                  value={formData.members[i].phone}
                  onChange={(e) => handleMemberChange(i, 'phone', e.target.value)}
                  required
                  aria-label={`Member ${i + 1} Phone Number`}
                />
                {errors.members[i]?.phone && <p className="text-red-500 text-sm mt-1">{errors.members[i].phone}</p>}
              </div>
              
              <div>
                <select
                  className={`border p-2 rounded w-full ${errors.members[i]?.gender ? 'border-red-500' : ''}`}
                  value={formData.members[i].gender}
                  onChange={(e) => handleMemberChange(i, 'gender', e.target.value)}
                  required
                  aria-label={`Member ${i + 1} Gender`}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.members[i]?.gender && <p className="text-red-500 text-sm mt-1">{errors.members[i].gender}</p>}
              </div>
              
              <div>
                <select
                  className={`border p-2 rounded w-full ${errors.members[i]?.tshirt ? 'border-red-500' : ''}`}
                  value={formData.members[i].tshirt}
                  onChange={(e) => handleMemberChange(i, 'tshirt', e.target.value)}
                  required
                  aria-label={`Member ${i + 1} T-shirt Size`}
                >
                  <option value="">-- T-shirt Size --</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
                {errors.members[i]?.tshirt && <p className="text-red-500 text-sm mt-1">{errors.members[i].tshirt}</p>}
              </div>
              
              <div>
                <select
                  className={`border p-2 rounded w-full ${errors.members[i]?.foodPreference ? 'border-red-500' : ''}`}
                  value={formData.members[i].foodPreference}
                  onChange={(e) => handleMemberChange(i, 'foodPreference', e.target.value)}
                  required
                  aria-label={`Member ${i + 1} Food Preference`}
                >
                  <option value="">-- Select Food Preference --</option>
                  <option value="V">Veg</option>
                  <option value="N">Non-Veg</option>
                </select>
                {errors.members[i]?.foodPreference && <p className="text-red-500 text-sm mt-1">{errors.members[i].foodPreference}</p>}
              </div>
            </div>
          </React.Fragment>
        ))}

        <div className="mb-6 text-left">
          <label className="block mb-2 font-medium">Payment QR Code</label>
          <div className="payment-image flex justify-around">
            <img
              src="/esewa.jpeg"
              alt="Scan eSewa QR code to make payment"
              className="w-40 h-40 mb-4 border-2 border-black rounded shadow"
            />
            <img
              src="/kumari.jpeg"
              alt="Scan Kumari QR code to make payment"
              className="w-40 h-40 mb-4 border-2 border-black rounded shadow"
            />
          </div>
          <label className="block mb-2 font-medium">Upload Payment Proof (image)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className={`border p-2 rounded w-full ${errors.paymentProof ? 'border-red-500' : ''}`}
            required
            aria-label="Upload Payment Proof"
          />
          {errors.paymentProof && <p className="text-red-500 text-sm mt-1">{errors.paymentProof}</p>}
        </div>

        <div className="mb-4 text-left">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleInputChange}
              className={`mr-2 ${errors.agreed ? 'border-red-500' : ''}`}
              required
              aria-label="Agree to Terms and Conditions"
            />
            I agree to the{' '}
            <span
              onClick={(e) => {
                e.preventDefault();
                setShowTerms(true);
              }}
              className="text-blue-600 underline cursor-pointer hover:text-yellow-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowTerms(true);
                }
              }}
            >
              Terms and Conditions
            </span>
            {' '}and{' '}
            <span
              onClick={(e) => {
                e.preventDefault();
                setShowPrivacyPolicy(true);
              }}
              className="text-blue-600 underline cursor-pointer hover:text-yellow-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setShowPrivacyPolicy(true);
                }
              }}
            >
              Privacy Policy
            </span>.
          </label>
          {errors.agreed && <p className="text-red-500 text-sm mt-1">{errors.agreed}</p>}
        </div>

        {showTerms && <RulesPopup onClose={() => setShowTerms(false)} />}
        {showPrivacyPolicy && <PrivacyPolicyPopup onClose={() => setShowPrivacyPolicy(false)} />}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition disabled:bg-gray-400"
          disabled={isSubmitting || isPastDeadline}        >
          {isSubmitting ? 'Submitting...' : 'Register Team for LICT Hackathon'}
        </button>
      </form>
    </motion.section>
  );
}