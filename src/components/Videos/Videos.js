import React, {useState, useEffect} from "react";
import ReactHtmlParser from 'react-html-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faPlay } from '@fortawesome/free-solid-svg-icons'
import Landing from "../Landing/Landing";
import api, {BASEURL, key} from "../../api/api";

const VideoItem = ({file,image,title,content,side}) => {

    const [displayVideo,setDisplayVideo] = useState(false);

    const  renderVideo = () => {
        if(displayVideo){
            return(
                <div className={'video__iframe'}>
                    <FontAwesomeIcon icon={faTimes} style={{color:"white"}} onClick={()=>setDisplayVideo(false)}/>
                    <div className={'video__iframe--container'}>
                    <iframe src={file} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                     </iframe>
                    </div>
                </div>
            )
        }
    };

    return (
    <div className={'video'}>
        <div className={'video__container'}>
            <div className={`video__col video__col--${side} video__content-container`}>
                <div className={'video__content'}>
                    <h2>{title}</h2>
                    <div>{ReactHtmlParser(content)}</div>
                </div>
            </div>
            <div className={'video__col video__file-container'}>
                <div className={'video__file'} style={{backgroundImage:`url(${BASEURL + image})`}}>
                    <FontAwesomeIcon icon={faPlay} size={"5x"} style={{color:"white"}} onClick={()=>setDisplayVideo(true)}>Play</FontAwesomeIcon>
                </div>
                {renderVideo()}
            </div>
        </div>
    </div>
    )
}

const Videos = () => {

    const [landingImage, setlandingImage] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [interiorVideoFile, setInteriorVideoFile] = useState("");
    const [interiorVideoDisplay, setInteriorVideoDisplay] = useState("");
    const [interiorVideoTitle, setInteriorVideoTitle] = useState("");
    const [interiorVideoContent, setInteriorVideoContent] = useState("");
    const [exteriorVideoFile, setExteriorVideoFile] = useState("");
    const [exteriorVideoDisplay, setExteriorVideoDisplay] = useState("");
    const [exteriorVideoTitle, setExteriorVideoTitle] = useState("");
    const [exteriorVideoContent, setExteriorVideoContent] = useState("");


    useEffect(() => {
        api.get("/singletons/get/Videos?token=" + key).then((onSuccess) => {
            setlandingImage(onSuccess.data.landingImage.path)
            setSubTitle(onSuccess.data.subTitle);
            setInteriorVideoFile("https://www.youtube.com/embed/" + onSuccess.data.interiorVideoFile + "?rel=0");
            setInteriorVideoTitle(onSuccess.data.interiorVideoTitle);
            setInteriorVideoDisplay(onSuccess.data.interiorVideoDisplay.path)
            setInteriorVideoContent(onSuccess.data.interiorVideoContent);
            setExteriorVideoFile("https://www.youtube.com/embed/" + onSuccess.data.exteriorVideoFile + "?rel=0");
            setExteriorVideoDisplay(onSuccess.data.exteriorVideoDisplay.path)
            setExteriorVideoTitle(onSuccess.data.exteriorVideoTitle);
            setExteriorVideoContent(onSuccess.data.exteriorVideoContent);
        })
    });

    return (
        <div>
            <Landing title={subTitle} backgroundImage={landingImage}/>
            <VideoItem
                file={interiorVideoFile}
                image={interiorVideoDisplay}
                title={interiorVideoTitle}
                content={interiorVideoContent}
x            />
            <VideoItem
                file={exteriorVideoFile}
                image={exteriorVideoDisplay}
                title={exteriorVideoTitle}
                content={exteriorVideoContent}
                side={"right"}/>
        </div>
    )
};

export default Videos;