         
import React, { useState, useEffect, setState } from "react"
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography,  
  } from "react-simple-maps";  
//import Select from "react-select"

//import Countries from "./Countries";
  
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  
//const countries =(new Countries).getCountries()

const Map = ({setTooltipContent, regionsSelected}) => {
  
  const [query, setQuery] = useState("")
  const [countryList, setCountryList] = useState([])
  const [selectedRegion, setSelectedRegion] = useState("")
  const [regionList, setRegionList] =useState([]);

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
    console.log(`HC query ${query}`)
    console.log(`HC searches: ${countryList}`)
  }
  function cleanRegions(){
    
    regionList.splice(0, regionList.length)
    
  }
  useEffect(()=>{
    var i=regionList.indexOf(selectedRegion)    
    console.log(`i = ${i}; selected region: ${selectedRegion}`) 
    if (selectedRegion==="Worldwide" && i===-1) {
      cleanRegions();
      regions.forEach(element => {
        setRegionList(regionList=>[...regionList, element.value])        
      });
      setSelectedRegion("")
    } 
    if (selectedRegion==="Worldwide" && i!==-1) {
      console.log("start cleaning")
      cleanRegions();
      console.log("cleaning finished, perhaps...")
    }    
      
    console.log(`Region List: ${regionList}`)        
  },[selectedRegion])

  var cList = []
  const regions = [{label: "Worldwide", value: "Worldwide"},
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
    
  
  return ( 
    <div style={{height:"300px"}}>
        <ComposableMap data-tip=""  style={{width:"100%", height:"100%"}} projection="geoEqualEarth" projectionConfig={{ scale: 200 }} >
          <ZoomableGroup >
            <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
              {({ geographies }) =>
                geographies.map(geo => {                  
                  var isHighlighted =(
                   (regionList.indexOf(geo.properties.SUBREGION)!==-1) ||
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

export default Map

