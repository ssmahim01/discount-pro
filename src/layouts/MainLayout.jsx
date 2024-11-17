import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div className="bg-slate-100">
            <Header></Header>
            <section className="min-h-[calc(100vh-300px)]">
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;