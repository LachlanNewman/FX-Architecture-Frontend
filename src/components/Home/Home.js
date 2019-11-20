import React, {useEffect, useState} from 'react';

// API
import api from '../../api/api'

import Landing from "../Landing/Landing";
import AboutUs from "../AboutUs/AboutUs";
import Profile from "../Profile/Profile";

const Home = () => {

    const [profiles,setProfiles] = useState([])

    useEffect(()=> {
        api.get("/profiles").then((onSuccess) => {
            setProfiles(onSuccess.data)
        })
    },[])

    return (
        <div>
        <Landing title={'home'} backgroundImage={"../../imgs/home.jpg"}/>
        <AboutUs/>

            {profiles.map((value,index)=>{
                let side;
                index % 2 == 0 ? side = 'left' : side = 'right'
                return <Profile profile={value} side={side}/>
            })}

        </div>
    )
};

export default Home;