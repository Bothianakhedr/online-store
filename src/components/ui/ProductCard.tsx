import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { GrHome } from "react-icons/gr";
import type { IProductCard } from "../../interfaces";
interface IProductDetails {
  product: IProductCard;
}

const ProductCard = ({ product }: IProductDetails) => {
  const { badge, images, name, price, salePrice, shortDescription } = product;

  return (
    <div className="bg-white  rounded-b-[24px]  border  border-[#E7E7E7] ">
      <div className="relative">
        <img
          src={images[0].url}
          alt=""
          className="w-full h-[280px] object-cover"
        />
        {badge && (
          <span className="absolute top-3 left-3 rounded-sm text-xl text-[#1B1B1B] font-bold  bg-[#FFE8629C] p-[3px]">
            {badge}
          </span>
        )}
        <span className="absolute w-[40px] h-[40px] rounded-full flex items-center justify-center  top-2 right-3 text-3xl text-[#1B1B1B] font-bold  bg-[#FFF5BB] p-[3px]">
          <CiHeart />
        </span>
      </div>
      <div className="content p-4">
        <div className="flex items-center mb-3 justify-between">
          <h3 className="text-[22px] leading-[30px] text-[#1B1B1B]">
            {name[0].value}
          </h3>
          <span className=" p-2 rounded-full">
            <span className="bg-[#1B1B1B] w-[46px] h-[46px] text-white text-[16px] rounded-full flex items-center justify-center">
              <FaCartPlus />
            </span>
          </span>
        </div>
        <p className="text-[16px] leading-6 text-[#555555] line-clamp-2">
          {shortDescription[0].value}
        </p>
        <div className="flex items-center  gap-2">
          <span className="text-[#1B1B1B]">
            EGP <b className="text-[24px]  font-bold">{salePrice}</b>
          </span>
          <del className="text-[#6F6F6F] text-[15px] mt-2">{price}</del>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <GrHome className="text-[#4E9BD3]" />
          <span className="text-[#555555] text-[16px] ">
            Only <b>4</b> left in Stock
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
