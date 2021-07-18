import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import ReactTooltip from "react-tooltip";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,  
} from "react-simple-maps"; 

import Countries from "./Countries";

const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const regions = [
  {label: "Worldwide", value: "Worldwide"},
  {label: "Antarctica", value: "Antarctica"},
  {label: "Australia and New Zealand", value: "Australia and New Zealand"},
  {label: "Caribbean", value: "Caribbean"},
  {label: "Central America", value: "Central America"},
  {label: "Central Asia", value: "Central Asia"},
  {label: "Eastern Africa", value: "Eastern Africa"},
  {label: "Eastern Asia", value: "Eastern Asia"},
  {label: "Eastern Europe", value: "Eastern Europe"},
  {label: "Melanesia", value: "Melanesia"},
  {label: "Middle Africa", value: "Middle Africa"},
  {label: "Northern Africa", value: "Northern Africa"},
  {label: "Northern America", value: "Northern America"},
  {label: "Northern Europe", value: "Northern Europe"},
  {label: "Seven seas (open ocean)", value: "Seven seas (open ocean)"},
  {label: "South America", value: "South America"},
  {label: "South-Eastern Asia", value: "South-Eastern Asia"},
  {label: "Southern Africa", value: "Southern Africa"},
  {label: "Southern Asia", value: "Southern Asia"},
  {label: "Southern Europe", value: "Southern Europe"},
  {label: "Western Africa", value: "Western Africa"},
  {label: "Western Asia", value: "Western Asia"},
  {label: "Western Europe", value: "Western Europe"}
]  

const RegConSelect = ({}) =>{
  const { handleSubmit, control, watch } = useForm({});
      
  const [data, setData] = useState(null);
  const regionsSelcted = watch();  
  
  const [query, setQuery] = useState("")
  const [countryList, setCountryList] = useState([])
  
  useEffect(()=>{
    console.log(`useEffect regionsSelected: ${regionsSelcted.value}`)
  },[regionsSelcted])
  
  useEffect(()=>{
    var i=countryList.indexOf(query)       
    if (query!=="") {  
      if (i===-1) {
        handleClick()
        console.log(`query ${query}`)
        console.log(`searches: ${countryList}`)  
      } else {
        countryList.splice(i,1)
        console.log(`query ${query}`)
        console.log(`searches: ${countryList}`)  
      }
      setQuery("")
      console.log(`query ${query}`)
    }        
  },[query])
  
  
  
  const handleClick = () => { 
    var i=countryList.indexOf(query)       
    if (query!=="") {  
      if (i===-1) {
        setCountryList(countryList => [...countryList, query])         
      } else {
        countryList.splice(i,1)        
      }
      setQuery("")
      console.log(`query ${query}`)
    }            
  } 

  const Select = ({ name, options, control, defaultValue, ...props }) => {
    
    
    return (    
      <Controller
        name="Regions"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <ReactSelect
            {...field}
            options={regions}
            //onChange={this.handleChange}          
            isMulti
          />
        )}
      />
    )
  };

  const MapChart = ({}) =>{
    
    const [content, setContent] = useState("");
    
    
    return(    
         <div style={{}}>
            <Map setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
  };

  const Map = ({setTooltipContent, regionsSelected}) => {
  
      
              
    return ( 
      <div style={{height:"300px"}}>
          <ComposableMap data-tip=""  style={{width:"100%", height:"100%"}} projection="geoEqualEarth" projectionConfig={{ scale: 200 }} >
            <ZoomableGroup >
              <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
                {({ geographies }) =>
                  geographies.map(geo => {                  
                    var isHighlighted =(                     
                     (countryList.indexOf(geo.properties.ISO_A3) !== -1)
                    )
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? "#E42" : "#D6D6DA"} 
                        onMouseEnter={() => { 
                          const { NAME } = geo.properties;
                          setTooltipContent(`${NAME}`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                          handleClick();
                        }}                 
                        onClick={() => {setQuery(geo.properties.ISO_A3);                  
                        }}
                      />
                    );
                  })
                }
              </Geographies>      
            </ZoomableGroup>
          </ComposableMap>  
        </div>
    )
  }
  
  return (
    <div style={{display:"flex", width:"100%", border:"1px solid black",height:"300px"}}>
      <div style={{width:"50%", height:"100%", border:"1px solid black"}}>
        <p>Select region:</p>
        
          <Select
            name={"list"}
            options={{}}
            control={control}        
          />
          <button >submit</button>
          
          <p>Watch:</p>
          <pre>{JSON.stringify(regionsSelcted, null, 4)}</pre>

          <p>Submit:</p>
          <pre>{JSON.stringify(data, null, 1)}</pre>
                           
      </div>

      <div style={{width:"45%", height:"100%", border:"1px solid black"}}>
        <MapChart regions={data}/>                   
      </div>
                
    </div>
    
  );
}
export default RegConSelect;