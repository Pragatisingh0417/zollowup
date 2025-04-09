import Marquee from "react-fast-marquee";

export default function DynamicBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 py-3">
      <Marquee
        speed={50}
        gradient={false}
        className="text-black text-base md:text-lg font-bold font-roboto"
        aria-label="Hiring Announcement Banner"
      >
        Hiring! Hiring! Hiring! &nbsp; | &nbsp; We Are Hiring Maids, Cooks And Many More House Helpers &nbsp; | &nbsp; Join Us Today For Better Lifestyle! &nbsp; | &nbsp;
      </Marquee>
    </div>
  );
}
