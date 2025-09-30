import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}
const Button = ({ children, className, ...rest }: IProps) => {

  return (
    <button className={`${className}  text-xl cursor-pointer p-2  rounded-[11px]`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
