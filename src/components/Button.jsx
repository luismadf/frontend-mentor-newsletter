const Button = ({ children, fullWidth, className }) => {
  // hover:bg-gradient-to-r
  // hover:from-[#FF586C]
  // hover:to-[#FF6155]

  return (
    <button
      className={`font-bold text-white rounded-lg px-6 py-3.5 bg-[#242742] hover:bg-[#FF586C] duration-150 hover:shadow-xl shadow-[#FF586C] 
      ${fullWidth && "w-full"} 
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
