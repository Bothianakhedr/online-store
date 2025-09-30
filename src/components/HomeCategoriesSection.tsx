import { useHomeProducts } from "../hooks/useHomeProducts";
import type { IHomeCategory } from "../interfaces";

const HomeCategoriesSection = () => {
  const { isLoading, error, data } = useHomeProducts({
    url: "/home",
    queryKey: ["categories"],
    colIndex: 0,
    rowIndex: 1,
    type: "categories",
  });
  if (isLoading) return <h3>loading</h3>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="bg-gray-100 my-5 py-8">
      <div className="container mx-auto">
        <div className="title my-5 flex items-center justify-center gap-3">
          <div className="flex gap-0.5 items-center">
            <span className="w-[8px] bg-[#FFF09B] rounded-xl h-[29px]"></span>
            <span className="w-[8px] bg-[#FFF09B] rounded-xl h-[38px]"></span>
            <span className="w-[8px] bg-[#FFF09B] rounded-xl h-[43px]"></span>
          </div>
          <h3 className="text-[#1B1B1B] text-4xl font-bold">Categories</h3>
        </div>

        <div className="categories my-11 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {data.map(({ image, name, id }: IHomeCategory) => (
            <div
              key={id}
              className="category flex flex-col items-center justify-center"
            >
              <div className="image  flex items-center justify-center w-[160px] h-[160px]  bg-gradient-to-r from-[#FEFEFE] to-[#FFF5BB] rounded-full hover:scale-105 transition shadow">
                <img
                  src={image.url}
                  alt={name[0].value}
                  className="  w-[110px]  h-[110px] rounded-full object-cover"
                />
              </div>
              <h5 className="text-[20px] my-5  text-[#1B1B1B] font-semibold">
                {name[0].value}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategoriesSection;
