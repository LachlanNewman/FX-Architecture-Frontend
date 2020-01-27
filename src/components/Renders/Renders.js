import React ,{useState,useEffect} from "react";

// API
import api, {BASEURL, key} from "../../api/api";

// Components
import Landing from "../Landing/Landing";
import Gallery from "../Gallery/Gallery";
import Section from "../Section/Section";

const Renders = () => {

    const [landingImage,setlandingImage] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [interiorRenderImage,setInteriorRenderImage] = useState("");
    const [interiorRenderTitle,setInteriorRenderTitle] = useState("");
    const [interiorRenderContent,setInteriorRenderContent] = useState("");
    const [exteriorRenderImage,setExteriorRenderImage] = useState("");
    const [exteriorRenderTitle,setExteriorRenderTitle] = useState("");
    const [exteriorRenderContent,setExteriorRenderContent] = useState("");
    const [landscapeRenderImage,setLandscapeRenderImage] = useState("");
    const [landscapeRenderTitle,setLandscapeRenderTitle] = useState("");
    const [landscapeRenderContent,setLandscapeRenderContent] = useState("");


    useEffect(()=> {
        api.get("/singletons/get/Renders?token=" + key).then((onSuccess) => {
            setlandingImage(onSuccess.data.landingImage.path)
            setSubTitle(onSuccess.data.subTitle);
            setInteriorRenderImage(onSuccess.data.interiorRenderImage.path)
            setInteriorRenderTitle(onSuccess.data.interiorRenderTitle);
            setInteriorRenderContent(onSuccess.data.interiorRenderContent);
            setExteriorRenderImage(onSuccess.data.exteriorRenderImage.path)
            setExteriorRenderTitle(onSuccess.data.exteriorRenderTitle);
            setExteriorRenderContent(onSuccess.data.exteriorRenderContent);
            setLandscapeRenderImage(onSuccess.data.landscapeRenderImage.path)
            setLandscapeRenderTitle(onSuccess.data.landscapeRenderTitle);
            setLandscapeRenderContent(onSuccess.data.landscapeRenderContent);
        })
    },[])
    
    return (
        <div>
            <Landing title={subTitle} backgroundImage={landingImage}/>
            <Section title={interiorRenderTitle} content={interiorRenderContent} image={interiorRenderImage} side={'left'}/>
            <Section title={exteriorRenderTitle} content={exteriorRenderContent} image={exteriorRenderImage} side={'right'}/>
            <Section title={landscapeRenderTitle} content={landscapeRenderContent} image={landscapeRenderImage} side={'left'}/>
        </div>
    )
};

export default Renders;