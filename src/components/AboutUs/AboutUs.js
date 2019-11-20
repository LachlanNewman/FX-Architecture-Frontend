import React from "react";

const AboutUs = () => {


    return (
        <div className={'about'}>
            <div className={'about__container'}>
                <div className={'about__title'}>
                    <h2>About Us</h2>
                </div>
                <div className={'about__content'}>
                    <p>People tend to think that "About Us" pages have to sound formal to gain credibility and trust.
                        But most people find it easier to trust real human beings, rather than a description that sounds
                        like it came from an automaton. Trying to sound too professional on your "About Us" page results
                        in stiff, “safe” copy and design -- the perfect way to make sure your company blends in with the
                        masses.</p>
                    <br/>
                    <p>
                        Instead, Eight Hour Day showcases the people behind the company and humanizes its brand.
                        Introducing the founders by name and featuring the photos of them on the "About Us" page drives
                        home the point that Nathan and Katie are -- as they so astutely put it -- "two individuals with
                        a passion for creativity -- creativity makes us happy."
                    </p>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;