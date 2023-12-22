import React from 'react';

const TargetAudienceSection = () => {
  return (
    <section className="bg-cyan-800 p-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-2 bg-white py-4">Who Can Benefit?</h2>
        <p className="text-white mb-8">
          Our website is designed to cater to a diverse audience. Whether you're a developer, corporate professional, banker, or someone else, you'll find value in our platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Developer Card */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Developers</h3>
            <p className="text-gray-600">Explore tools and resources tailored for developers to enhance your skills and productivity.</p>
          </div>

          {/* Corporate Professional Card */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
            <p className="text-gray-600">Discover solutions that streamline your workflow and support your professional growth in the corporate world.</p>
          </div>

          {/* Banker Card */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Bankers</h3>
            <p className="text-gray-600">Access tools and insights relevant to the banking industry for informed decision-making and efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
