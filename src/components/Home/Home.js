import React, {useEffect, useState} from 'react';

// API
import api,{key} from '../../api/api'

// Components
import Landing from "../Landing/Landing";
import AboutUs from "../AboutUs/AboutUs";
import Profiles from "../Profiles/Profiles";

const Home = () => {

    const [aboutUsContent, setAboutUsContent]   = useState("");
    const [landingImage,setLandingImage]        = useState("");
    const [aboutUsTitle,setAboutUsTitle]        = useState("");
    const [subTitle, setSubTitle]               = useState("");

    useEffect(()=> {
        api.get("/singletons/get/Home?token=" + key).then((onSuccess) => {
            setLandingImage(onSuccess.data.landingImage.path)
            setAboutUsContent(onSuccess.data.aboutUsContent)
            setAboutUsTitle(onSuccess.data.aboutUsTitle)
            setSubTitle(onSuccess.data.subTitle);
        })
    },[])

    return (
        <div>
            <Landing title={subTitle} backgroundImage={landingImage}/>
            <AboutUs title={aboutUsTitle} content={aboutUsContent}/>
            <Profiles/>
        </div>
    )
};

export default Home;