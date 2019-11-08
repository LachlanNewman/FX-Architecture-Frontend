import React from "react";

// Components
import Landing from "../Landing/Landing";
import Gallery from "../Gallery/Gallery";

const Renders = () => {
    return (
        <div>
            <Landing subTitle={'Renders'} backgroundImage={"../../imgs/gimnasio.jpg"}/>
            <Gallery/>
        </div>
    )
}

export default Renders;