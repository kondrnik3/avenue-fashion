import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import StoreMenu from "../components/Store/StoreMenu";
import StoreItemElement from "../components/Store/StoreItems/StoreItemElement";
import LookBookItem from "../components/LookBook/LookBookPage/LookBookItem";
import LookBookItems from "../components/LookBook/LoobBookHome/LookBookItems";

let LookBook = () => {
    return(
        <>
        <Header/>
            <div className="wrapper">
                <div className="lookbook_menu">
                    <StoreMenu/>
                </div>
                <div className="lookbook_items">
                    <StoreItemElement/>
                    <StoreItemElement/>
                    <LookBookItem/>
                    <StoreItemElement/>
                    <StoreItemElement/>
                    <StoreItemElement/>
                    <StoreItemElement/>
                    <LookBookItem big={true} />
                    <StoreItemElement/>

                    <LookBookItems/>

                </div>

            </div>
        <Footer/>
        </>
    );
}
export default LookBook;