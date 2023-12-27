import React from "react";

const TextInput = ({ label, className, type = "text", ...rest }) => {
  const id = React.useId();

  return (
    <fieldset className={`flex flex-col ${className}`}>
      <div className="flex justify-between text-sm font-bold mb-2">
        {label && <label htmlFor={id}>{label}</label>}

        <span className="error-tag text-[#ff6257]">Valid email required</span>
      </div>
      <input
        id={id}
        type={type}
        className="px-5 py-3 border-solid border-2 focus:outline-none focus:border-[#9294a0] hover:border-[#9294a0] rounded-md duration-500 invalid:border-[#ff6257] invalid:focus:border-[#ff6257] invalid:border-[#ff6257] invalid:text-[#ff6257] invalid:bg-[#ff6257]/10"
        {...rest}
      />
    </fieldset>
  );
};

export default TextInput;
