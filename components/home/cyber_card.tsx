import ArrowIcon from "../arrow_icon";
import CircledNumber from "./circled_number";

interface CyberCardProps {
  number: string;
  title: string;
  description: string;
}

const CyberCard = ({ number, title, description }: CyberCardProps) => {
  return (
    <div className="flex flex-col items-center gap-8 grow">
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Circled Number 1 */}
        <CircledNumber number={number} />
        <span className="font-bold text-[32px] text-center text-black">
          {title}
        </span>
        <span className="font-normal text-base text-center text-black">
          {description}
        </span>
      </div>
    </div>
  );
};

export default CyberCard;
