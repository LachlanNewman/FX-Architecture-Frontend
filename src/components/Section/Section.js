import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import PropTypes from 'prop-types'
import {BASEURL} from "../../api/api";



const Section = ({title,content,image,side}) => {

    return (
        <div className={'section '}>
            <div className={'section__container'}>
                <div className={`section__${side} section__side`}>
                    <div className={'section__left-container section__side-container section__context'}>
                        <h2>{title}</h2>
                        {ReactHtmlParser(content)}
                    </div>
                </div>
                <div className={`section__${side == sides.right ? sides.left : sides.right} section__side`}>
                    <div className={`section__${side == sides.right ? sides.left : sides.right}-container section__side-container section__image`}
                         style={{backgroundImage:`url(${BASEURL + image})`}}>
                    </div>
                </div>
            </div>
        </div>
    )
};

const sides = {
    left: 'left',
    right: 'right'
};

Section.propTypes = {
    sides: PropTypes.oneOf(Object.keys(sides))
}

export default Section;