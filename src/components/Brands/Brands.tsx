import { useHomeProducts } from "../../hooks/useHomeProducts";
import type { IHomeBrand } from "../../interfaces";
import Loading from "../Loading";

const Brands = () => {
  const { data, error, isLoading } = useHomeProducts({
    queryKey: ["brands"],
    rowIndex: 5,
    colIndex: 0,
    resource: "/home",
    type: "brands",
  });

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <section className="bg-gray-100 my-7 py-7">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Our Brands</h2>

        <div className="grid gap-7 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {data?.map(({ id, logo }:IHomeBrand) => (
            <div key={id} className="shadow-sm rounded-xl bg-white">
              <img
                src={logo.url}
                alt={logo.name}
                className="w-full h-16 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
