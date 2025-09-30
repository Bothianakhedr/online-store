import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    className?:string
    
}

const Input = ({className, ...rest }: IProps) => {
  return (
    <input
      className={`${className}  rounded-[11px] py-5 px-2.5 border border-[#BEBEBE]  bg-[#FCFCFC]   focus:border-[#C4E1F6] focus:outline-none focus:ring-1 focus:ring-[#C4E1F6]`}
      {...rest}
    />
  );
};

export default Input;
