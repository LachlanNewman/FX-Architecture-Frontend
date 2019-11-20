import React ,{useState,useEffect} from "react";

// API
import api,{BASEURL} from "../../api/api";

// Components
import Landing from "../Landing/Landing";
import Gallery from "../Gallery/Gallery";
import Section from "../Section/Section";

const Renders = () => {

    const [renders,setRenders] = useState([]);

    useEffect(()=> {
        api.get("/renders").then((onSuccess)=> {
            setRenders(onSuccess.data)
        })
    },[])

    return (
        <div>
            <Landing title={'renders'}/>
            {
                renders.map((value,index)=> {
                    let side;
                    index % 2 == 0? side = 'left': side = 'right';
                    return <Section render={value} side={side}/>
                })
            }
            <Gallery/>
        </div>
    )
}

export default Renders;