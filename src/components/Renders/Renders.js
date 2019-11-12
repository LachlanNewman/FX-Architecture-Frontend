import React from "react";

// Components
import Landing from "../Landing/Landing";
import Gallery from "../Gallery/Gallery";
import Section from "../Section/Section";

const Renders = () => {
    return (
        <div>
            <Landing subTitle={'Renders'} backgroundImage={"../../imgs/gimnasio.jpg"}/>
            <Section side={'left'} img={"../../imgs/home.jpg"}/>
            <Section side={'right'} img={"../../imgs/home.jpg"}/>
            <Section side={'left'} img={"../../imgs/home.jpg"}/>
            <Gallery/>
        </div>
    )
}

export default Renders;