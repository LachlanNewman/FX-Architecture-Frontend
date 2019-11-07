import React, {useEffect, useState} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


//Components
import Home from "./components/Home/Home";

const App = () => {

    const handleScroll =() => {
        console.log("scroll")
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll,true);
    }, [])

    return (
        <Router>
            <div>
                <nav className={'navigation'}>
                    <ul className={'navigation__list'}>
                        <li className={'navigation__item'}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className={'navigation__item'}>
                            <Link to={'/'}>Renders</Link>
                        </li>
                        <li className={'navigation__item'}>
                            <Link to={'/'}>Link 2</Link>
                        </li>
                        <li className={'navigation__item'}>
                            <Link to={'/'}>Link 3</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path={"/"} component={Home} />
                    {/*<Route exact path={"/renderings"} component={Renderings}/>*/}
                </Switch>
            </div>
        </Router>
  )
}

export default App;
