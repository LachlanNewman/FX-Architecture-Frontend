import React from "react";

const Renders = () => {
    return (
        <div className={'renders'}>
            <div className={'renders__container'}>
                <h2>Renders</h2>
                <div className={'renders__content'}>
                    <div className={'renders__text'}></div>
                    <div className={'renders__image'}>
                        <img src={process.env.PUBLIC_URL + "imgs/gimnasio.jpg"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Renders;