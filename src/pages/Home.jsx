import React from 'react';
import Header from "../components/Header/Header";
import Store from "../components/Store/Store";
import LookBookItems from "../components/LoobBook/LookBookItems";
import Footer from "../components/Footer/Footer";

let Home = () => {
    return (
        <>
            <Header/>
            <Store/>
            <LookBookItems/>
            <Footer/>
        </>
    );
};

export default Home