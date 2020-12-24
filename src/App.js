import React from 'react';

import './scss/app.scss'
import Home from "./pages/Home";
import {Route} from "react-router-dom";


function App() {
    return (
        <>
        <Route path="/" component={Home} exact/>
        {/*<Route path="/brand" component={Brand} exact/>*/}
        </>
    );
}

export default App;
