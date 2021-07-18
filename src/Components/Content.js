import React,  { useEffect, useState, setState } from "react";

import RegionsSelect from "./RegionsSelect";
import RegionsNMap from "./RegionsNMap"
import SalesVerticales from "./SalesVerticales";
import BusinesModel from "./BusinesModel"


const Content = ()=>{
    
    
    const [businesModel_value, setBusinesModelVal] =useState(0)

    const [lineCapacity, setLineCapacity] = useState(0)

    const [countrySelected, setCountrySelected] = useState(false)

    const [salesSelected, setSalesSelected] = useState(false)

    const assemblyLine_Change = (e) =>{
        setLineCapacity(e.target.name)
        console.log(e.target.name)
    }
    
    return( 
        <div>    
            <RegionsNMap isCountrySelected={res=>{setCountrySelected(res)}}/>
            <div style={{display:"flex", width:"100%",height:"300px"}}>
                <div style={{display:countrySelected?"block":"none" , width:"220px"}}>
                    <SalesVerticales isSalesSelected={res=>{setSalesSelected(res)}}/>
                </div>
                <div style={{display: salesSelected? "block": "none",width:"340px"}}>
                    <BusinesModel businesModel={res=>{setBusinesModelVal(res)}}/>
                </div>
                <div style={{display: (businesModel_value===1&&salesSelected)? "block": "none", width:"220px"}}>
                    <p>Assembly line capacity:</p>
                    <div>
                        <input type="radio" id="1250" name="1250" checked={lineCapacity==="1250"} onChange={assemblyLine_Change}/>
                        <label for="1250">1250 pcs/year</label>                       
                    </div>
                    <div>
                        <input type="radio" id="2500" name="2500" checked={lineCapacity==="2500"} onChange={assemblyLine_Change} />
                        <label for="2500">2500 pcs/year</label>
                    </div>
                </div>
                <div style={{display: (businesModel_value!==-1&&salesSelected)? "block": "none"}}>
                    <p>Price:</p>                    
                </div>
            </div>            
        </div>   
    );
    
}

/*const Content = () =>{
   console.log(BusinesModel.selected)
    return( 
        <div>    
            <RegionsNMap/>
            <SalesVerticales/>
            <BusinesModel/>
        </div>   
    );
    
};*/

export default Content;