import Article from "../../components/articles/Article";
import CarouselComp from "../../components/carousel/CarouselComp";
import Footer from "../../components/footer/Footer";
import ImageCards from "../../components/image-cards/ImageCards";
const Layout = () => {
  return (
    <>
      <CarouselComp />
      <Article />
      <ImageCards />
      <Footer />
    </>
  );
};

export default Layout;
