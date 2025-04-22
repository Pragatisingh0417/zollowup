import React, { useEffect, useState } from "react";
import axios from "axios";
import Herosection from "../components/Herosection";
import InfoSection from "../components/InfoSection";
import Cta from "../components/Cta";
import Introduction from "../components/Introduction";
import Reasons from "../components/Reasons";
import NewAndNoteworthySlider from "../components/NewAndNoteworthySlider";
import Testimonial from "../components/Testimonial";
import CountingNumber from "../components/CountingNumber";
import Cleaning from "../components/Cleaning";
import GoogleForm from "../components/GoogleForm";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/your-endpoint`)
    .then(response => setData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Introduction />
      <Herosection />
      <InfoSection />
      <Reasons />
      <NewAndNoteworthySlider />
      <Cleaning />
      <CountingNumber />
      <Testimonial />
      <Cta />

    </div>
  );
};

export default Home;
