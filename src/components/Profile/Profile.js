import React from "react";
import img from '../../imgs/avatar-placeholder.png'

const Profile = ({side}) => {
    return (
        <div className={'profile'}>
            <div className={'profile__container'}>
                <div className={`profile__image`}>
                    <img src={img}/>
                </div>
                <div className={`profile__info profile__${side}`}>
                    <div className={'profile__info-container'}>
                        <h3>Ximena Porta</h3>
                        <p>Info about ximena porta Architect, hardworking, proficient and dedicated. Engaged in solving
                            problems at the different work areas I may be involved. I love working in a team and I find
                            myself to always have the initiative to solve problems efficiently, to achieve goals in the
                            best way and to constantly be searching for new knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;