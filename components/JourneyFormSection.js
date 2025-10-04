import React from 'react';
import { useRouter } from 'next/router';

export default function JourneyFormSection() {
  const router = useRouter();

  const handleWorkshopRequest = () => {
    router.push('/request-forms?form=workshop');
  };

  const handlePartnershipRequest = () => {
    router.push('/request-forms?form=partnership');
  };

  return (
    <section className="pb-6 bg-gradient-to-br from-purple-50 via-white to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center min-h-screen" id="journey" style={{ paddingTop: '98px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-3">
            Choose Your <span className="text-black">Journey</span>
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto font-medium">
            Select the path that best fits your current needs and begin your transformation journey 
            with Pinnacle Thrive Coaching.
          </p>
        </div>

        {/* Request Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto mt-8">
          <button
            onClick={handleWorkshopRequest}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-text-white"
          >
            Request for Workshop
          </button>
          <button
            onClick={handlePartnershipRequest}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-text-white"
          >
            Request Long Term Partnership
          </button>
        </div>
      </div>
    </section>
  );
}