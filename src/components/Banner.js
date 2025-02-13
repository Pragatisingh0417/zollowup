import Marquee from "react-fast-marquee";

export default function DynamicBanner() {
  return (
    <div className="bg-yellow-400 py-3">
      <Marquee speed={50} gradient={false} className="text-white text-lg font-bold font-roboto">
        Hiring!  Hiring!  Hiring! &nbsp; | &nbsp; We Are Hiring Maids, Cooks &nbsp; | &nbsp; Join Us Today For Better Lifestyle!
      </Marquee>
    </div>
  );
}
