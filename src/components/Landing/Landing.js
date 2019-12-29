import React, {useEffect, useState} from 'react';

// API
import api,{BASEURL} from "../../api/api";

const Landing = ({title,backgroundImage}) => {

    return(
        <div className={'landing'}>
            <div className={'landing__background-image'} style={{backgroundImage:`url(${BASEURL}${backgroundImage})`}}>
                <div className={'landing__overlay'}>
                    <div className={'landing__text'}>
                        <a href={"/"}><h1 className={'landing__title'}>F|X</h1></a>
                        <h2 className={'landing__subtitle'}>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Landing;