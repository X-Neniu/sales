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
import { set } from "react-hook-form";

const RegionsNMap=({isCountrySelected})=>{
    const countries =(new Countries).getCountries() 
    const [selectedRegions, setSelectedRegions] = useState([])
    const [bell, setBell] = useState(0)

    
    
    const Selector=()=>{       
        
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


        class _Selector extends React.Component {
            state = {
              selectedOption: selectedRegions
              };
            handleChange = selectedOption => {
              var i=-1
              selectedOption.forEach(e => {
                if (e.value==="Worldwide") {
                  i=1
                }
              }); 
              
            if (i!==-1) {
              selectedRegions.splice(0,selectedRegions.length)
              setSelectedRegions(regions)
              
              this.setState({ selectedRegions });
            }
            else{
              this.setState({ selectedOption });           
              setSelectedRegions(selectedOption)
            }  
            
            
           //console.log(selectedOption.length)
           selectedOption.length>0?isCountrySelected(true):isCountrySelected(false)
            setBell((bell)+1)      
            //console.log(selectedRegions)
            };
            
            render() {
            const { selectedOption } = this.state;
        
            return (
                <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={regions}
                isMulti={true}          
                />
            );
            }
        }  
        return(
            <_Selector />
            
        )
    }

   
    const MapChart = () =>{    
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
        const [query, setQuery] = useState("")        
        const [countryList, setCountryList] = useState([])
        const [countryFromMap, setCountryFromMap]=useState([])
        //const [selectedRegion, setSelectedRegion] = useState("")
        const [regionList, setRegionList] =useState([]);
        
        useEffect(()=>{
            var i=-1
            /*console.log(selectedRegions)
            if (selectedRegions.indexOf("Worldwide"!==-1)) {
                countryList.splice(0, countryList.length)
                countries.forEach(country =>{
                  setCountryList(countryList => [...countryList, country])
                })               
                
            }*/
            countries.forEach(country_ => {
                selectedRegions.forEach(region => {
                    if (country_.subregion===region.value) {
                        setCountryList(countryList => [...countryList, country_.country])
                    }
                }); 
            });
            
            
        },[bell])

        useEffect(()=>{
          var i=countryList.indexOf(query)
             
          if (query!=="") {  
            if (i===-1) {
                handleClick()
               
            } else {
                countryList.splice(i,1)
                
            }
            setQuery("")            
          }   
          console.log(countryList)          
          
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
          }
          //console.log(`Contry list lenght: ${countryList.length}`)
                   
          
        }
        
        return ( 
          <div style={{height:"300px"}}>
              <ComposableMap data-tip=""  style={{width:"100%", height:"100%"}} projection="geoEqualEarth" projectionConfig={{ scale: 200 }} >
                <ZoomableGroup >
                  <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
                    {({ geographies }) =>
                      geographies.map(geo => {                  
                        var isHighlighted =(                         
                         (countryList.indexOf(geo.properties.NAME) !== -1)
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
        <div style={{display:"flex", width:"100%", height:"300px"}}>

          <div style={{width:"50%", height:"100%"}}>
              <p>Select region:</p>
              <Selector/>              
          </div>

          <div style={{width:"45%", height:"100%"}}>
              <MapChart/>                   
          </div>
                    
        </div>
    )
}

export default RegionsNMap;