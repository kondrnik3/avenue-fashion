import React from 'react';
import StoreMenu from "./StoreMenu";
import StoreItems from "./StoreItems/StoreItems";

let Store = () => {
    return (
        <div className="wrapper">
            <div className="store">
                <StoreMenu/>
                <StoreItems/>
            </div>
        </div>
    );
}
export default Store