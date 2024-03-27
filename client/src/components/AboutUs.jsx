import React from "react";

const AboutUs = () => {
  return (
    <div id="aboutUs" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Image */}
          <img
            src="https://www.kriptpharma.com/wp-content/uploads/2021/10/kript-pharma-logo.png"
            alt="About Us"
            className="w-1/2 mx-auto mb-8"
          />
          {/* Text */}
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 leading-relaxed font-semibold text-xl">
            Kript Pharmaceuticals, incorporated in the Year 2021, had a modest
            beginning. The promoter and visionary, Komal Singla, has an
            experience in the Pharma Industry. He established ‘Kript
            Pharmaceuticals, a Company that would manufacture quality medicines
            similar to those made by the best global pharma companies, and make
            them accessible to small and big customers alike, in India and
            abroad. Today, because of its base of satisfied customers, Bendic
            health is a fast expanding Pharma organization having over 400+
            registered brands, and is steadily working to make a presence across
            the Globe.
            <br />
            <br />
            The Company also caters to demand from Command Hospitals (Army),
            Railway Hospitals, Centre and State Health Departments. Besides
            manufacturing its own brands for marketing and franchise partnering,
            Kript Pharmaceuticals is also engaged in Third Party / Loan License
            manufacturing for many Pharma companies. Kript Pharmaceuticals
            manufacturing unit is WHO- cGMP compliant/certified, using modern
            technology and equipped with contemporary machines and instruments.
            At Kript Pharmaceuticals we believe in weaving in business ethics in
            all our endeavours and continually updating and upgrading to deliver
            a uniform quality that surpasses industry benchmarks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
