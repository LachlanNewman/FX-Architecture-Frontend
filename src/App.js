import React, {useEffect, useState} from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'


//Components
import Home from "./components/Home/Home";
import Renders from "./components/Renders/Renders";

const App = () => {

    return (
        <div>
            <Router>
                <div>
                    <nav className={'navigation'}>
                        <ul className={'navigation__list'}>
                            <li className={'navigation__item navigation__item--yellow'}>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className={'navigation__item'}>
                                <Link to={'/renderings'}>Renders</Link>
                            </li>
                            <li className={'navigation__item navigation__item--yellow'}>
                                <Link to={'/'}>Link 2</Link>
                            </li>
                            <li className={'navigation__item'}>
                                <Link to={'/'}>Link 3</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/renderings"} component={Renders}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;
