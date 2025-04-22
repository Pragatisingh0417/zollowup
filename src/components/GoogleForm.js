import React from "react";

const GoogleForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 py-10">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Apply for Job / नौकरी के लिए आवेदन करें
      </h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdngM2l6qZfSORYIV36q62mIZC2E3P8DeH3fsJZYdKX5bqwGg/viewform?usp=dialog"
        width="100%"
        height="1400"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Job Application Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
