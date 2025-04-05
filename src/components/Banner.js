import Marquee from "react-fast-marquee";

export default function DynamicBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 py-3">
      <Marquee
        speed={50}
        gradient={false}
        className="text-black text-lg font-bold font-roboto"
      >
        Hiring! Hiring! Hiring! &nbsp; | &nbsp; We Are Hiring Maids, Cooks And Many More House Helper &nbsp; | &nbsp; Join Us Today For Better Lifestyle!
      </Marquee>
    </div>
  );
}
