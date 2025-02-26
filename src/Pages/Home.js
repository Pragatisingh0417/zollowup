import React from "react";
import Herosection from "../components/Herosection";
import InfoSection from "../components/InfoSection";
// import Whychooseus from "../components/Whychooseus";
import Cta from "../components/Cta";
// import Whyus from "../components/Whyus";
import Introduction from "../components/Introduction";
import Reasons from "../components/Reasons";
import NewAndNoteworthySlider from "../components/NewAndNoteworthySlider";
import Testimonial from "../components/Testimonial";
import CountingNumber from "../components/CountingNumber";
// import ScrollAnimation from "../components/ScrollAnimation";
import Cleaning from "../components/Cleaning";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Introduction />
      <Herosection />
      <InfoSection />
      <Reasons />
      <NewAndNoteworthySlider />
      <Cleaning />
      <CountingNumber />
      {/* <Whyus /> */}
      <Testimonial />
      {/* <ScrollAnimation /> */}
      {/* <Whychooseus /> */}
      <Cta />
    </div>
  );
};

export default Home;
