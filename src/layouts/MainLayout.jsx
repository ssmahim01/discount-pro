import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext } from "react";
import { AuthContext } from "../providers/Provider";
import Loading from "../components/Loading";

const MainLayout = () => {
    const {loading} = useContext(AuthContext);

    if(loading){
        return <Loading></Loading>
     };

    return (
        <div className="overflow-hidden bg-base-100">
            <Header></Header>
            <section className="pt-16 min-h-[calc(100vh-306px)]">
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;