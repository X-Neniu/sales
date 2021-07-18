import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import MapChart from "./MapChart";

import Countries from "./Countries";

const RegConSelect = ({}) =>{
  const { handleSubmit, control, watch } = useForm({});
      
  const [data, setData] = useState(null);
  const values = watch();  
  const [bla, setbla] = useState("")
  

  const Select = ({ name, options, control, defaultValue, ...props }) => {
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
  
    return (    
      <Controller
        name="Regions"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <ReactSelect
            {...field}
            options={regions}          
            isMulti
          />
        )}
      />
    )
  };
  
  return (
    <div style={{display:"flex", width:"100%", border:"1px solid black",height:"300px"}}>
      <div style={{width:"50%", height:"100%", border:"1px solid black"}}>
        <p>Select region:</p>
        <form onSubmit={handleSubmit(data => setData(data))} className="form">
          <Select
            name={"list"}
            options={{}}
            control={control}        
          />
          <button >submit</button>
          
          <p>Watch:</p>
          <pre>{JSON.stringify(values, null, 4)}</pre>

          <p>Submit:</p>
          <pre>{JSON.stringify(data, null, 1)}</pre>
        </form>                    
      </div>

      <div style={{width:"45%", height:"100%", border:"1px solid black"}}>
        <MapChart regions={data}/>                   
      </div>
                
    </div>
    
  );
}
export default RegConSelect;