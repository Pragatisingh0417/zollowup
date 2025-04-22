import { useState } from "react";
import { FaBroom, FaUtensils, FaBath, FaCouch } from "react-icons/fa";

const services = [
  { id: 1, name: "House Cleaning", icon: <FaBroom />, description: "Experience a spotless home with our professional house cleaning services. Reliable, thorough, and tailored to your needs.", image: "https://img.freepik.com/premium-photo/young-woman-sweeping-floor-kitchen_157927-16441.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid" },
  { id: 2, name: "Kitchen Cleaning", icon: <FaUtensils />, description: "Make your kitchen shine with our expert cleaning service. We tackle grease, grime, and germs for a spotless, hygienic space.", image: "https://img.freepik.com/premium-photo/nice-modern-bright-kitchen_470178-15756.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid" },
  { id: 3, name: "Bathroom Cleaning", icon: <FaBath />, description: "Get a sparkling clean bathroom with our deep cleaning service. We remove stains, sanitize surfaces, and leave it fresh and hygienic.", image: "https://img.freepik.com/premium-photo/green-washing-product-cleaning-glass-bathroom-young-chambermaid-is-hotel-room_146671-136614.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid" },
  { id: 4, name: "Office Cleaning", icon: <FaCouch />, description: "Caring and trustworthy babysitters for your little ones. Safe, engaging, and nurturing care when you need it most.", image: "https://img.freepik.com/premium-photo/sofa-chemical-cleaning-with-professionally-extraction-method-upholstered-furniture-early-spring-cleaning-regular-clean-up_152904-40601.jpg?ga=GA1.1.853350676.1718004547&semt=ais_hybrid" },
];

const MaidServices = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto p-6 mb-5 border rounded-lg shadow-lg  bg-gradient-to-r from-black to-green-700">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/3 rounded-md  p-4  bg-yellow-300">
        <h2 className="text-lg font-semibold mb-4">Our Maid Service</h2>
        <ul>
          {services.map((service) => (
            <li
              key={service.id}
              className={`flex items-center gap-3 p-3 cursor-pointer rounded-md mb-2 transition duration-300 ${selectedService.id === service.id ? "bg-black text-white" : "bg-gray-200 hover:bg-green-300"}`}
              onClick={() => setSelectedService(service)}
            >
              <span className="text-2xl">{service.icon}</span>
              <span >{service.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Display Section */}
      <div className="w-full md:w-2/3 p-4 flex flex-col items-center text-center">
        <img src={selectedService.image} alt={selectedService.name} className="w-full max-w-sm h-48 object-cover rounded-lg mb-4" />
        <h2 className="text-xl font-semibold mb-2 text-yellow-100">{selectedService.name}</h2>
        <p className="text-white">{selectedService.description}</p>
      </div>
    </div>
  );
};

export default MaidServices;
