import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import type { IRegisterForm } from "../interfaces";

export const Register_Form_Input:IRegisterForm[] = [
  {
    type: "text",
    placeholder: "FirstName",
    label: "FirstName",
    id: "FName",
    icon: <CiUser />,
  },
  {
    type: "text",
    placeholder: "LastName",
    label: "LastName",
    id: "LName",
    icon: <CiUser />,
  },
  {
    type: "email",
    placeholder: "Write Your email",
    label: "Email Address",
    id: "FName",
    icon: <CiMail />,
  },
  {
    type: "tel",
    placeholder: "Phone Number",
    label: "Phone Number",
    id: "phoneNumber",
    icon: <MdOutlinePhone />,
  },
  {
    type: "password",
    placeholder: "********",
    label: "Password",
    id: "password",
    icon: <CiLock />,
    rightIcon: <IoMdEye />,
  },

  {
    type: "password",
    placeholder: "**********",
    label: "confirm Password",
    id: "confirm password",
    icon: <CiLock />,
    rightIcon: <IoMdEye />,
  },
];
