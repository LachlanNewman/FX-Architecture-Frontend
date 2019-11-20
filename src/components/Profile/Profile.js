import React from "react";
import PropTypes from "prop-types";

// API
import {BASEURL} from "../../api/api";

const Profile = ({profile,side}) => {

    const {name,content,image} = profile;

    console.log(image)

    return (
        <div className={'profile'}>
            <div className={'profile__container'}>
                <div className={`profile__image profile__image--${side}`}>
                    <img src={BASEURL + image.url}/>
                </div>
                <div className={`profile__info profile__info--${side === sides.right ? sides.left: sides.right}`}>
                    <div className={'profile__info-container'}>
                        <h3>{name}</h3>
                        <p>{content}</p>
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

Profile.propTypes = {
    sides: PropTypes.oneOf(Object.keys(sides))
}

export default Profile;