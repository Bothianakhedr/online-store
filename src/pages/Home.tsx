
import SliderSection from "@/components/Slider/SliderSection";
import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/Footer";
import HomeCategoriesSection from "../components/HomeCategories/HomeCategoriesSection";
import Products from "../components/Products/Products";

const Home = () => {
  return <>
    <SliderSection />
    <HomeCategoriesSection />
    <Products />
    <Banner />
    <Brands />
    <Footer />
  </>
}

export default Home;
