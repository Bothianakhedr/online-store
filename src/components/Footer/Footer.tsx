import SocialFooter from "./SocialFooter";
import { CustomerService, policies, ShopByCategory } from "./footer-data";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";


import googlePlayImg from "../../assets/image/images.png";
import pay from "../../assets/image/png-transparent-payment-methods-thumbnail.png";


const Footer = () => {
  return (
    <footer className="bg-[#F1F1F1] px-3 py-8">
      <div className="flex">
        <div className="container   mx-auto py-7 grid gap-8 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {/* Company Name */}
          <div>
            <FaMapLocation className="text-[45px]  mb-3" />
            <h5 className="text-[#1B1B1B] text-[20px] font-semibold leading-relaxed mt-4 mb-2">
              Company Name
            </h5>
            <p className="text-[#8C8C8C] text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Ultricies donec in
              faucibus nibh. Vitae turpis ornare ac vel ullamcorper ut sed. A
              pellentesque blandit pulvinar mattis ultricies pharetra.
            </p>
          </div>

          {/* Customer Service & Help */}
          <div>
            <h5 className="text-[#1B1B1B] text-[20px] font-semibold leading-relaxed">
              Customer Service & Help
            </h5>
            <ul className="mt-6 space-y-2">
              {CustomerService.map((text, index) => (
                <li className="text-[#1B1B1B] text-[16px]" key={index}>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Shop by Category */}
          <div>
            <h5 className="text-[#1B1B1B] text-[20px] font-semibold leading-relaxed">
              Shop by Category
            </h5>
            <ul className="mt-6 space-y-2">
              {ShopByCategory.map((cat: string, index) => (
                <li className="text-[#1B1B1B] text-[16px]" key={index}>
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-[#1B1B1B] text-xl font-semibold">
              Contact Info
            </h5>
            <div className="flex gap-3 mt-4">
              <SocialFooter>
                <FaFacebookF />
              </SocialFooter>
              <SocialFooter>
                <FaInstagram />
              </SocialFooter>
            </div>
            <div className="flex items-center gap-2 mt-3 text-sm">
              <FaPhoneAlt />
              <span>+20111 223 3577</span>
            </div>
            <div className="mt-6">
              <h6 className="text-lg font-semibold text-[#FF9D3D]">
                Get the App Now
              </h6>
              <div className="mt-3 flex flex-col gap-3">
                <img src={googlePlayImg} alt="Google Play" className="w-36 " />
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Bottom */}
      <div className="container mx-auto ">
        <div className="terms flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            {policies.map((item, i) => (
              <h6 key={i} className="text-[15px] text-[#1B1B1B]">
                {item}
              </h6>
            ))}
          </div>
          <img src={pay} alt="payment" className="h-[40px]" />
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8"></div>
      <p className="text-center text-[16px] text-[#1B1B1B] mt-5">
        © 2025 [Company Name]. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
