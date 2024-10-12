import Image from "next/image";
import user1Pic from "../app/images/user1.png";

const UserCard = () => {
  return (
    <div className="w-full max-w-sm bg-[#304146] rounded-2xl shadow-lg flex flex-col p-4">
      <div className="flex flex-col items-center pb-4">
        <Image
          className="w-20 h-20 mb-3 rounded-full shadow-lg object-cover" // Adjust image size using responsive classes
          src={user1Pic}
          alt="User Image"
          layout="intrinsic" // Ensure intrinsic layout
          width={80} // Set width to 80 (adjustable)
          height={80} // Set height to 80 (adjustable)
        />
        <span className="text-lg font-medium text-white text-center">Makonnen</span>

        <div className="flex mt-4 md:mt-6 space-x-2 flex-wrap justify-center"> {/* Added flex-wrap for responsiveness */}
          <span className="bg-[#008FE0] text-white text-sm font-medium px-2.5 py-0.5 rounded">Microsoft</span>
          <span className="bg-[#27AE60] text-white text-sm font-medium px-2.5 py-0.5 rounded">CTO</span>
        </div>

        <span className="text-sm text-white text-center mt-4 px-2">
          From proactive threat detection to comprehensive compliance management and security audits, LinkShield offers bespoke cybersecurity solutions designed to protect.
        </span>
      </div>
    </div>
  );
};

export default UserCard;
