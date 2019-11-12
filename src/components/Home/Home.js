import React, {useEffect, useState} from 'react';
import Landing from "../Landing/Landing";
import AboutUs from "../AboutUs/AboutUs";
import Profile from "../Profile/Profile";

const Home = () => {

    return (
        <div>
        <Landing subTitle={'Architecture'} backgroundImage={"../../imgs/home.jpg"}/>
        <AboutUs/>
        <Profile side={'right'}/>
        </div>
    )
};

export default Home;