import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const SocialFooter = ({ children }: IProps) => {
  return (
    <div className="bg-[#1B1B1B] w-[42px] h-[42px] rounded-[24px] flex items-center justify-center text-white">
      {children}
    </div>
  );
};

export default SocialFooter;
