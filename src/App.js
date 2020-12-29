import React from 'react';


import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Brand from "./pages/Brand";

import './scss/app.scss'
import LookBook from "./pages/LookBook";

function App() {
    return (
        <>
        <Route path="/" component={Home} exact/>
        <Route path="/brand" component={Brand} exact/>
        <Route path="/lookbook" component={LookBook} exact/>
        </>
    );
}

export default App;
