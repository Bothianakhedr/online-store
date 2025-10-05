import laptop from "@/assets/image/5c7354a9875c6d2460d171c6fbefeae07bd2e94d.png";
import laptop1 from "@/assets/image/606b64ec3ecf26dbf788da9ac80aec7545cdc7d0.png";
import SimpleSlider from "./Slider";

const SliderSection = () => {
  return (
    <section className="mt-5 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

        {/* Mobile: Full width, Desktop: 1 column */}
        <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] bg-[#FFF5BB] rounded-2xl md:rounded-3xl border border-[#DADADA] overflow-hidden">
          <img
            src={laptop}
            alt="laptop"
            className="w-full h-[230px] sm:h-[270px] md:h-[310px] lg:h-[330px] object-cover rounded-t-2xl md:rounded-t-3xl"
          />
          <h2 className="py-2 px-2 text-center text-lg sm:text-xl font-bold leading-6 sm:leading-8">
            GET Now
          </h2>
        </div>

        {/* Mobile: Full width, Tablet: Full width, Desktop: 2 columns */}
        <div className="md:col-span-2 lg:col-span-2 order-first md:order-none">
          <SimpleSlider />
        </div>

        {/* Mobile: Full width, Desktop: 1 column */}
        <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] bg-[#FFF5BB] rounded-2xl md:rounded-3xl border border-[#DADADA] overflow-hidden">
          <img
            src={laptop1}
            alt="laptop"
            className="w-full h-[230px] sm:h-[270px] md:h-[310px] lg:h-[330px] object-cover rounded-t-2xl md:rounded-t-3xl"
          />
          <h2 className="py-2 px-2 text-center text-lg sm:text-xl font-bold leading-6 sm:leading-8">
            NEW ARRIVALS
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
