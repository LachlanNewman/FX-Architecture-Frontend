import React, {useEffect, useState} from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'


//Components
import Home from "./components/Home/Home";
import Renders from "./components/Renders/Renders";
import ContactForm from "./components/ContactForm/ContactForm";
import Videos from "./components/Videos/Videos";

const HOME = "HOME";
const RENDERS = "RENDERS";

const App = () =>{

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
                                <Link to={'/videos'}>Videos</Link>
                            </li>
                            <li className={'navigation__item'}>
                                <Link to={'/contact-us'}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/renderings"} component={Renders}/>
                        <Route exact path={"/videos"} component={Videos}/>
                        <Route exact path={"/contact-us"} component={ContactForm}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;
