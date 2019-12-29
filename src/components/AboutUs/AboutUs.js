import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const AboutUs = ({title,content}) => {


    return (
        <div className={'about'}>
            <div className={'about__container'}>
                <div className={'about__title'}>
                    <h2>{title}</h2>
                </div>
                <div className={'about__content'}>
                    {ReactHtmlParser(content)}
                </div>
            </div>
        </div>
    )
};

export default AboutUs;