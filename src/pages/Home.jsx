import React from 'react';
import HeaderHome from "../components/Header/HeaderHome";
import Store from "../components/Store/Store";
import LookBookItems from "../components/LookBook/LoobBookHome/LookBookItems";
import Footer from "../components/Footer/Footer";


let Home = () => {
    return (
        <>
            <HeaderHome/>
            <Store/>
            <LookBookItems/>
            <Footer/>
        </>
    );
};

export default Home