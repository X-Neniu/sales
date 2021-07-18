
import React, {useState, useEffect} from "react"
import Countries from "./Countries";
import Select from "react-select"

const Selector = ()=>{
    const countries =(new Countries).getCountries() 
    const [selectdCntrs, setSelectdCntrs] = useState([])
    var update = 0
    
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

    useEffect(()=>{
        console.log(`selecected country array lenght: ${selectdCntrs.length}`)
    },[update])

    class _Selector extends React.Component {
        state = {
          selectedOption: null,
        };
        handleChange = selectedOption => {
          this.setState({ selectedOption });           
          if(selectdCntrs.length>0){
            selectdCntrs.splice(0,selectdCntrs.length)
          } 
          selectedOption.forEach(option => {
            //setSelectedRegion(element.value)        //как только значение уходит наружу происходит сброс state?
            
            
            countries.forEach(country => {
              if (country.subregion===option.value) {    
                selectdCntrs.push(country.country) 
                console.log(`foreach country: ${country.country}`)
              }
            });
          });
          update=1;         
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
            />
          );
        }
    }  
    return(
        <_Selector />
        
    )

}
export default Selector;