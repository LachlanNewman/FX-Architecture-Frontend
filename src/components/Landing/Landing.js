import React, {useEffect, useState} from 'react';

const Landing = (props) => {


    return(
        <div className={'landing'}>
            <div className={'landing__background-image'} style={{backgroundImage:`url(${props.backgroundImage})`}}>
                <div className={'landing__overlay'}>
                    <div className={'landing__text'}>
                        <a href={"/"}><h1 className={'landing__title'}>F|X</h1></a>
                        <h2 className={'landing__subtitle'}>{props.subTitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Landing;