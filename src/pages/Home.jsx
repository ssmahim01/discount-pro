import Banner from "../components/Banner";
import SaleOffBrands from "../components/SaleOffBrands";
import TopBrands from "../components/TopBrands";

const Home = () => {
  return (
    <div>
      {/* Banner Slider */}
      <Banner></Banner>

      {/* Top Brands */}

      <section className="py-7">
        <TopBrands></TopBrands>
      </section>

      {/* Sale is Off Brands */}
      <section className="md:w-4/5 w-11/12 mx-auto pb-5">
        <SaleOffBrands></SaleOffBrands>
      </section>
    </div>
  );
};

export default Home;
