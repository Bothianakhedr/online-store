import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";

import ProductCard from "../ui/ProductCard";

import { useHomeProducts } from "../../hooks/useHomeProducts";
import type { IProductCard } from "../../interfaces";
import Loading from "../Loading";

function Products() {
  const { data, error, isLoading } = useHomeProducts({
    resource: "/home",
    queryKey: ["products"],
    rowIndex: 3,
    colIndex: 0,
    type: "products",
  });

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="super-deal bg-gradient-to-r from-[#C4E1F6] to-[#FEEE91] py-7 my-7">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[28px] md:text-[32px] font-bold text-[#1B1B1B]">
            Super Deals
          </h3>
        </div>

        <Slider {...settings} className="mt-8 ">
          {data.map((product: IProductCard) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Products;
