import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider from "../../assets/image/1a00ecf510ad325fcfb996cdb818c5f3e003566e.png";
import slider1 from "../../assets/image/slider-image-1.jpeg";
import slider2 from "../../assets/image/slider-image-2.jpeg";
import slider3 from "../../assets/image/slider-image-3.jpeg";
import "../../index.css";
import Button from "../ui/Button";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="overflow-hidden rounded-3xl home-slider">
      <div className=" w-full h-[380px] relative">
        <img src={slider} className=" w-full h-full object-cover rounded-3xl" />
        <Button className=" w-[257px] text-white  bg-linear-60 from-[#676767] to-[#282828] h-[52px] absolute bottom-16 right-6">
          Shop Now
        </Button>
      </div>
      <div className=" w-full h-[380px] relative">
        <img
          src={slider1}
          className=" w-full h-full object-cover rounded-3xl"
        />
        <Button className=" w-[257px] text-white  bg-linear-60 from-[#676767] to-[#282828] h-[52px] absolute bottom-16 right-6">
          Shop Now
        </Button>
      </div>
      <div className=" w-full h-[380px] relative">
        <img
          src={slider2}
          className=" w-full h-full object-cover rounded-3xl"
        />
        <Button className=" w-[257px] text-white  bg-linear-60 from-[#676767] to-[#282828] h-[52px] absolute bottom-16 right-6">
          Shop Now
        </Button>
      </div>
      <div className=" w-full h-[380px] relative">
        <img
          src={slider3}
          className=" w-full h-full object-cover rounded-3xl"
        />
        <Button className=" w-[257px] text-white  bg-linear-60 from-[#676767] to-[#282828] h-[52px] absolute bottom-16 right-6">
          Shop Now
        </Button>
      </div>
    </Slider>
  );
}
