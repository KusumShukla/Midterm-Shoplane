import React from "react";
// import CategoryList from "../components/CategoryList"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";


const HomePage = () => {
    return (
        <>
                <Navbar/>
                <Header/>
            <div className="Container">
                <ProductList />
            </div>


        </>
    )
}
export default HomePage;