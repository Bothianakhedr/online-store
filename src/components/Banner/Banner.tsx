import { useHomeProducts } from "../../hooks/useHomeProducts";
import Loading from "../Loading";


const Banner = () => {
  const { data, error, isLoading } = useHomeProducts({
    resource: "/home",
    queryKey: ["banner"],
    colIndex: 0,
    rowIndex: 4,
    type: "banner",
  });


  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="bg-gray-100 my-7 py-7">
      <div className="container mx-auto relative">
        <h4  className="text-2xl absolute left-8 top-8 font-semibold ">{data.title[0].value}</h4>
      <img src={data.image[0].value.url} alt={data.name} className="rounded-md shadow-2xl" />
      </div>
    </section>
  );
};

export default Banner;
