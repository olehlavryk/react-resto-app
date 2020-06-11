import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


const App = () => {

    return (
        <Router>
            <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
                <AppHeader total={50}/>
                <Switch>
                    <Route path="/cart" exact component={CartPage} />
                    <Route path="/" exact component={MainPage} />
                    <Route path='/:id' component={ItemPage}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;