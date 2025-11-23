import React from 'react';

const HackathonInfoSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Hackathon Selection Process & Guidelines
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Selection Process</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Only 15 teams</strong> can participate in the hackathon.</li>
          <li>
            If more than 15 teams registers, there will be a <strong>shortlisting round</strong> to pick the final teams.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">What Teams Need to Do While Registering?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Select at least <strong>3 themes</strong> from the given list.</li>
          <li>Write a short <strong>idea or explanation</strong> for each theme you choose.</li>
          <li>List your ideas in <strong>priority order</strong> (most to least preferred).</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">How Selection Will Happen?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            The selection team will evaluate <strong>only your first (most preferred)</strong> idea during the shortlisting round.
          </li>
          <li>
            Make sure to present your <strong>strongest idea first</strong>.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">If Your Team Gets Selected,</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            You will be assigned to work on <strong>any one of the three ideas</strong> you submitted during the hackathon.
          </li>
        </ul>
      </div>

      <p className="mt-6 text-gray-600 italic text-center">
        Please read the above guidelines carefully before filling out the registration form.
      </p>
    </section>
  );
};

export default HackathonInfoSection;