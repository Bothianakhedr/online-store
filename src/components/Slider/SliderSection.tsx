import SimpleSlider from "./Slider";
import laptop from "../../assets/image/5c7354a9875c6d2460d171c6fbefeae07bd2e94d.png"
import laptop1 from "../../assets/image/606b64ec3ecf26dbf788da9ac80aec7545cdc7d0.png"

const SliderSection = () => {
  return (
    <section className="mt-5">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        <div className="w-full h-[380px] bg-[#FFF5BB] rounded-3xl border border-[#DADADA] overflow-hidden">
          <img
            src={laptop}
            alt="laptop"
            className="w-full h-[330px] object-cover rounded-t-3xl"
          />
          <h2 className="py-2 text-center text-xl font-bold leading-8">
            GET Now
          </h2>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <SimpleSlider />
        </div>

        <div className="w-full h-[380px] bg-[#FFF5BB] rounded-3xl border border-[#DADADA] overflow-hidden">
          <img
            src={laptop1}
            alt="laptop"
            className="w-full h-[330px] object-cover rounded-t-3xl"
          />
          <h2 className="py-2 text-center text-xl font-bold leading-8">
            NEW ARRIVALS
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
