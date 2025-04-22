import React from "react";
import GoogleForm from "../components/GoogleForm";

const EmployeeForm = () => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Warning Note */}
      <div className="max-w-4xl mx-auto bg-red-50 border border-red-300 text-red-700 rounded-lg p-4 mb-6 shadow-md">
        <p className="font-semibold text-sm mb-2">⚠️ Note :</p>
        <p className="text-sm mb-1">
          Our company does not charge any fee from any candidate. If anyone is asking for money in the name of zollowup, please WhatsApp us on <strong>9267987940</strong> and do not make any payment.
        </p>
        <p className="text-sm mt-2">
          हमारी कंपनी किसी भी उम्मीदवार से कोई फीस नहीं लेती है। अगर कोई भी zollowup के नाम पर पैसे मांग रहा है तो कृपया हमें <strong>9267987940</strong> पर व्हाट्सएप करें और कोई भुगतान न करें।
        </p>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-900">
          नौकरी के लिए आवेदन करें / Apply for a Job
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <input type="text" placeholder="Name / पूरा नाम" className="form-input" required />
          <input type="tel" placeholder="Phone Number / फ़ोन नंबर" className="form-input" required />

          <input type="text" placeholder="Address / पता" className="form-input" required />
          <select className="form-input" required>
            <option value="">Gender / लिंग</option>
            <option value="Male">Male / पुरुष</option>
            <option value="Female">Female / महिला</option>
            <option value="Other">Other / अन्य</option>
          </select>

          <select className="form-input" required>
            <option value="">Marital Status / वैवाहिक स्थिति</option>
            <option value="Single">Single / अविवाहित</option>
            <option value="Married">Married / विवाहित</option>
            <option value="Widowed">Widowed / विधवा/विधुर</option>
          </select>
          <input type="text" placeholder="Religion / धर्म" className="form-input" required />

          <select className="form-input" required>
            <option value="">Category / कार्य श्रेणी</option>
            <option value="Maid">Maid / नौकरानी</option>
            <option value="Babysitter">Babysitter / शिशु देखभाल</option>
            <option value="Driver">Driver / ड्राइवर</option>
            <option value="Electrician">Electrician / इलेक्ट्रीशियन</option>
            <option value="Cook">Cook / रसोइया</option>
          </select>

          <input type="text" placeholder="Experience (Years) / अनुभव (साल में)" className="form-input" required />
          <input type="text" placeholder="Age / उम्र" className="form-input" required />

          <input type="text" placeholder="Education / शिक्षा स्तर" className="form-input" />
          <input type="text" placeholder="Nearby City / नजदीकी शहर" className="form-input" />

          {/* Aadhar Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Aadhar Card / आधार कार्ड अपलोड करें <span className="text-red-500">*</span>
            </label>
            <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="form-input w-full" required />
          </div>

          {/* Photo Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Photo / फोटो अपलोड करें <span className="text-red-500">*</span>
            </label>
            <input type="file" accept="image/*" className="form-input w-full" required />
          </div>

          {/* Resume Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Resume (if any) / रेज़्यूमे अपलोड करें (यदि हो)
            </label>
            <input type="file" accept=".pdf,.doc,.docx" className="form-input w-full" />
          </div>

          {/* Other ID Proof */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Other Govt ID Type / अन्य सरकारी प्रमाण
            </label>
            <select className="form-input">
              <option value="">Select / चुनें</option>
              <option value="PAN">PAN Card</option>
              <option value="Driving License">Driving License</option>
              <option value="Voter ID">Voter ID</option>
              <option value="Passport">Passport</option>
            </select>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Other ID Proof / प्रमाण अपलोड करें
            </label>
            <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="form-input w-full" />
          </div>

          {/* Extra info */}
          <textarea
            placeholder="Additional Information / कोई विशेष जानकारी"
            className="form-input md:col-span-2"
            rows="3"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="md:col-span-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition"
          >
            आवेदन सबमिट करें / Submit Application
          </button>
        </form>
      </div>
      <GoogleForm />

    </div>
  );
};

export default EmployeeForm;
