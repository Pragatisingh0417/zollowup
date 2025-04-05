import { useEffect, useState } from "react";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services") // Change URL if deployed
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <strong>${service.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
