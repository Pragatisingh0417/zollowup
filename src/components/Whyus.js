import React from 'react';

const Whyus = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
          <div className="w-16 h-16 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-lightbulb text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold text-blue-900">Skilled Experts</h3>
          <p className="text-gray-600">Our group has years of industry experience.</p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
          <div className="w-16 h-16 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-check-circle text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold text-blue-900">Proven Track Record</h3>
          <p className="text-gray-600">Frequently producing outcomes that receive favorable comments.</p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
          <div className="w-16 h-16 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-comments text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold text-blue-900">Open Communication</h3>
          <p className="text-gray-600">We provide you with updates at every stage.</p>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-lg">
          <div className="w-16 h-16 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center mb-4">
            <i className="fas fa-hand-holding-usd text-2xl"></i>
          </div>
          <h3 className="text-lg font-bold text-blue-900">Economical Remedies</h3>
          <p className="text-gray-600">Excellent work at reasonable costs.</p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
