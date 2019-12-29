import React, {useEffect, useState} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import PropTypes from "prop-types";

// API
import api, {BASEURL, key} from "../../api/api";

const Profiles = () => {

    const [profiles,setProfiles] = useState([]);

    useEffect(()=> {
        api.get("/collections/get/Profiles?token=" + key).then((onSuccess) => {
            console.log(onSuccess.data.entries)
            setProfiles(onSuccess.data.entries)
        })
    },[]);

     const profile = (profile,side) => {
        return <div className={'profile'}>
            <div className={'profile__container'}>
                <div className={`profile__image profile__image--${side}`}>
                    <img src={BASEURL + profile.profileImage.path}/>
                </div>
                <div className={`profile__info profile__info--${side === sides.right ? sides.left : sides.right}`}>
                    <div className={'profile__info-container'}>
                        <h3>{profile.profileName}</h3>
                        {ReactHtmlParser(profile.profileDescription)}
                    </div>
                </div>
            </div>
        </div>;
    };

    return (
        profiles.map((value,index)=> {
            let side;
            index % 2 == 0 ? side = 'left' : side = 'right'
            return profile(value,side)
        })
    )
};

const sides = {
    left: 'left',
    right: 'right'
};

Profiles.propTypes = {
    sides: PropTypes.oneOf(Object.keys(sides))
}

export default Profiles;