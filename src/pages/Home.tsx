
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import HomeCategoriesSection from "../components/HomeCategories/HomeCategoriesSection";
import Products from "../components/Products/Products";
import SliderSection from "../components/Slider/SliderSection";

const Home = () => {
  return (
    <>
      <SliderSection />
      <HomeCategoriesSection />
      <Products />
      <Banner />
      <Footer />
    </>
  )
}

export default Home;
