import React, {useEffect, useState} from 'react';

// API
import api,{key} from '../../api/api'

import Landing from "../Landing/Landing";
import AboutUs from "../AboutUs/AboutUs";
import Profiles from "../Profiles/Profiles";

const Home = () => {

    const [landingImage,setlandingImage] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [aboutUsTitle,setAboutUsTitle] = useState("");
    const [aboutUsContent, setAboutUsContent] = useState("");

    useEffect(()=> {
        api.get("/singletons/get/Home?token=" + key).then((onSuccess) => {
            console.log(onSuccess.data)
            setlandingImage(onSuccess.data.landingImage.path)
            setSubTitle(onSuccess.data.subTitle);
            setAboutUsTitle(onSuccess.data.aboutUsTitle)
            setAboutUsContent(onSuccess.data.aboutUsContent)
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