import Banner from "../components/Banner";
import TopBrands from "../components/TopBrands";

const Home = () => {
    return (
        <div>
            {/* Banner Slider */}
            <Banner></Banner>

            {/* Top Brands */}

            <section className="py-10">
                <TopBrands></TopBrands>
            </section>
        </div>
    );
};

export default Home;