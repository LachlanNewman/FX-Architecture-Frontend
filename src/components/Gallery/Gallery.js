import React from "react";
import ImageGallery from 'react-image-gallery';

//Components

const photos = [
    {
        original: "../../imgs/gimnasio.jpg",
        thumbnail: "../../imgs/gimnasio.jpg"
    },
    {
        original: "../../imgs/gimnasio.jpg",
        thumbnail: "../../imgs/gimnasio.jpg"
    },
    {
        original: "../../imgs/gimnasio.jpg",
        thumbnail: "../../imgs/gimnasio.jpg"
    }
]

const Gallery = () => {
    return <ImageGallery
        items={photos}
        useBrowserFullscreen={false}
    />

};

export default Gallery;