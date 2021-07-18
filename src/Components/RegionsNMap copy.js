import React, { useEffect, useState } from "react";

import Select from "react-select";
import ReactTooltip from "react-tooltip";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,  
} from "react-simple-maps"; 

import Countries from "./Countries";
import { render } from "@testing-library/react";

const RegionsNMap=()=>{
  
  const countries =(new Countries).getCountries() 
  const [selectdCntrs, setSelectdCntrs] = useState([])
  const [query, setQuery] = useState("")
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
    {label: "Western Europe", value: "Western Europe"}]  
  
    const Selector = ()=>{        
              
    
        class _Selector extends React.Component {
            state = {
              selectedOption: null,
            };
            handleChange = selectedOption => {
              this.setState({ selectedOption });           
              if(selectdCntrs.length>0){
                selectdCntrs.splice(0,selectdCntrs.length)
              } 
              var i=-1;
              selectedOption.forEach(option => {
                               
                
                countries.forEach(country => {
                  if (country.subregion===option.value) {
                      i=selectdCntrs.indexOf(country.country)
                      if(selectdCntrs.indexOf(country.country===-1)){    
                        selectdCntrs.push(country.country) 
                        console.log(`foreach country: ${country.country}`)
                      }
                      else{
                          selectdCntrs.splice(i,1)
                      }
                  }
                });
              });
              setQuery(" ")         
              console.log(selectdCntrs)
            };
            render() {
              const { selectedOption } = this.state;
          
              return (
                <Select
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={regions}
                  isMulti={true}  
                  defaultValue={selectdCntrs}        
                />
              );
            }
        }  
        return(
            <_Selector />            
        )
    
    }


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
        const geoUrl =
        "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
      
        const handleClick = () => { 
            var i=selectdCntrs.indexOf(query)       
            if (query!=="") {  
              if (i===-1) {
                setSelectdCntrs(selectdCntrs => [...selectdCntrs, query])         
              } else {
                selectdCntrs.splice(i,1)        
              }
              setQuery("")
              console.log(`query ${query}`)
            }      
            console.log(`HC query ${query}`)
            console.log(`HC searches: ${selectdCntrs}`)
          }
          useEffect(()=>{
            var i=selectdCntrs.indexOf(query)       
            if (query!=="") {  
              if (i===-1) {
                handleClick()
                console.log(`query ${query}`)
                console.log(`searches: ${selectdCntrs}`)  
              } else {
                selectdCntrs.splice(i,1)
                console.log(`query ${query}`)
                console.log(`searches: ${selectdCntrs}`)  
              }
              setQuery("")
              console.log(`query ${query}`)
            }        
          },[query])
        
        
                  
        return ( 
          <div style={{height:"300px"}}>
              <ComposableMap data-tip=""  style={{width:"100%", height:"100%"}} projection="geoEqualEarth" projectionConfig={{ scale: 200 }} >
                <ZoomableGroup >
                  <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
                    {({ geographies }) =>
                      geographies.map(geo => {                  
                        var isHighlighted =( console.log("Map:",selectdCntrs),                    
                         (selectdCntrs.indexOf(geo.properties.NAME) !== -1)
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
                              //handleClick();
                            }}                 
                            onClick={() => {setQuery(geo.properties.NAME);                  
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

  return(
    <div style={{display:"flex", width:"100%", border:"1px solid black",height:"300px"}}>

      <div style={{width:"50%", height:"100%", border:"1px solid black"}}>
        <p>Select region:</p>
        <Selector/>
        <p>Watch:</p>
          <pre>{JSON.stringify(selectdCntrs, null, 4) }</pre>  
        </div>

      <div style={{width:"45%", height:"100%", border:"1px solid black"}}>
        <MapChart/>                   
      </div>
                
    </div>
  )
}

export default RegionsNMap;