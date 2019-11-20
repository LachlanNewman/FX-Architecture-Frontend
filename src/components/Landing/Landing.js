import React, {useEffect, useState} from 'react';

// API
import api,{BASEURL} from "../../api/api";

const Landing = ({title}) => {

    const [subTitle,setSubTitle] = useState("");
    const [backgroundImage,setBackgroundImage] = useState("");

    useEffect(()=> {
        api.get(`/landingpages?title=${title}`).then(
            (onSuccess) => {
                let data = onSuccess.data[0]
                setSubTitle(data.subTitle)
                setBackgroundImage(BASEURL + data.backgroundImage.url)
            }
        )
    },[]);

    return(
        <div className={'landing'}>
            <div className={'landing__background-image'} style={{backgroundImage:`url(${backgroundImage})`}}>
                <div className={'landing__overlay'}>
                    <div className={'landing__text'}>
                        <a href={"/"}><h1 className={'landing__title'}>F|X</h1></a>
                        <h2 className={'landing__subtitle'}>{subTitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Landing;