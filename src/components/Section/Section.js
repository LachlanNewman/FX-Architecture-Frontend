import React from "react";
import PropTypes from 'prop-types'



const Section = ({side,img}) => {

    return (
        <div className={'section '}>
            <div className={'section__container'}>
                <div className={`section__${side} section__side`}>
                    <div className={'section__left-container section__side-container section__context'}>
                        <h2>Render Types</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                </div>
                <div className={`section__${side == sides.right ? sides.left : sides.right} section__side`}>
                    <div className={`section__${side == sides.right ? sides.left : sides.right}-container section__side-container section__image`} style={{backgroundImage:`url(${img})`}}>
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