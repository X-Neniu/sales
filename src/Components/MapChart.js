import React,  { useEffect, useState } from "react";
import Map from "./Map";
import ReactTooltip from "react-tooltip";


const MapChart = ({regions}) =>{
    
    const [content, setContent] = useState("");
    
    
    return(    
         <div style={{}}>
            <Map setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
};

export default MapChart;