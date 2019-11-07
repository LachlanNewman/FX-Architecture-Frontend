import React from "react";

// Components
import Home from "../Home/Home";

const Navigation = () => {
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
};

export default Navigation;