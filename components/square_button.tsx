const SquareButton = ({ children }: any) => {
  return (
    <div className="flex justify-center items-center gap-2 px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer">
      {children}
    </div>
  );
};


export default SquareButton;