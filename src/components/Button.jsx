import React from "react";

const Button = ({ styles }) => (
  <button type="button" onClick={() => alert('teste')} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Entre em contato
  </button>
);

export default Button;
