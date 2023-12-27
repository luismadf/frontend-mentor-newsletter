const Card = ({ children }) => {
  return (
    <div className="bg-white h-screen w-screen md:h-auto md:w-fit md:rounded-[28px] md:p-6 ">
      {children}
    </div>
  );
};

export default Card;
