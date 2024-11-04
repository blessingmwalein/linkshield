import Link from "next/link";

const SquareButton = ({ children , link }:any) => {
  return (
    <Link
      href={link || "#"}
      className="flex justify-center items-center gap-2 px-6 py-3 border border-black hover:text-white transition-colors cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default SquareButton;
