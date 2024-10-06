import React from "react";
import { Heart, Shield, DollarSign, FileText, Phone } from "lucide-react";

export default function HealthInsurance() {
  return (
    <div className="max-w-full md:max-w-2xl lg:max-w-4xl mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg max-h-[75vh] overflow-y-auto custom-scrollbar">
      {/* Header */}
      <header className="mb-6 md:mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
          Madison Insurance
        </h1>
        <h2 className="text-md md:text-xl text-gray-600">
          Comprehensive Health Insurance Policy
        </h2>
      </header>

      {/* Policy Details */}
      <section className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4 flex items-center">
          <Heart className="mr-2 w-6 h-6 text-blue-700" /> Policy Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-md">
          <div>
            <p className="font-medium text-sm md:text-base">Policy Number:</p>
            <p className="text-sm md:text-base">HEALTH-2023-654987</p>
          </div>
          <div>
            <p className="font-medium text-sm md:text-base">Effective Date:</p>
            <p className="text-sm md:text-base">April 1, 2023</p>
          </div>
          <div>
            <p className="font-medium text-sm md:text-base">Expiration Date:</p>
            <p className="text-sm md:text-base">March 31, 2024</p>
          </div>
          <div>
            <p className="font-medium text-sm md:text-base">Policyholder:</p>
            <p className="text-sm md:text-base">John Smith</p>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4 flex items-center">
          <Shield className="mr-2 w-6 h-6 text-blue-700" /> Coverage
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
          <li>Inpatient Hospitalization: 100% coverage after deductible</li>
          <li>Outpatient Services: $50 copay per visit</li>
          <li>Prescription Drugs: $20 copay</li>
          <li>Maternity Coverage: 100% after deductible</li>
          <li>Emergency Services: $100 copay</li>
        </ul>
      </section>

      {/* Premium and Payments */}
      <section className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4 flex items-center">
          <DollarSign className="mr-2 w-6 h-6 text-blue-700" /> Premium and
          Payments
        </h3>
        <p className="text-sm md:text-base mb-2">Annual Premium: $4,800</p>
        <p className="text-sm md:text-base mb-2">Monthly Payment: $400</p>
        <p className="text-sm md:text-base">
          Payment is due on the 1st of each month. A grace period of 10 days is
          allowed.
        </p>
      </section>

      {/* Terms and Conditions */}
      <section className="mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mb-4 flex items-center">
          <FileText className="mr-2 w-6 h-6 text-blue-700" /> Terms and
          Conditions
        </h3>
        <div className="space-y-4 text-sm md:text-base">
          <p>
            1. <strong>Coverage Area:</strong> This policy provides coverage
            within the United States.
          </p>
          <p>
            2. <strong>Deductible:</strong> $500 deductible applies to all major
            medical services.
          </p>
          <p>
            3. <strong>Claims:</strong> All claims must be submitted within 90
            days of receiving services.
          </p>
          <p>
            4. <strong>Pre-existing Conditions:</strong> Coverage may be limited
            for pre-existing conditions.
          </p>
          <p>
            5. <strong>Policy Changes:</strong> Any changes to the policy must
            be requested in writing and approved by Madison Insurance Company.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t border-gray-300">
        <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-2 flex items-center font-imprima">
          <Phone className="mr-2 w-6 h-6 text-blue-700" /> Contact Information
        </h3>
        <p className="text-sm md:text-base font-imprima">
          For claims or questions, please contact:
        </p>
        <p className="text-sm md:text-base font-imprima">
          Madison Insurance Company
        </p>
        <p className="text-sm md:text-base font-imprima">
          Phone: +254721366226
        </p>
        <p className="text-sm md:text-base font-imprima">
          Email: support@madisoninsurance.com
        </p>
      </footer>
    </div>
  );
}
