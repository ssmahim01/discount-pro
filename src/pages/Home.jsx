import Banner from "../components/Banner";
import DiscountCoupons from "../components/DiscountCoupons";
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

      {/* Best Discount */}
      <section className="pb-14 md:w-4/5 w-11/12 mx-auto">
          <h2 className="text-center md:text-4xl text-3xl font-bold my-8">Collect Your Coupons</h2>
        <DiscountCoupons></DiscountCoupons>
      </section>

    </div>
  );
};

export default Home;
