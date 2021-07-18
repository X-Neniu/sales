import React from "react"
import MultiSwitch from "react-multi-switch-toggle"


const BusinesModel =({businesModel})=> {
    const handleChange = e=>{
        businesModel(e)
        //console.log(e)
    }
    

    /*onToggle(selectedItem){
        console.log(selectedItem)
    }*/
    
    return(
        <div>
            <p>Select business model:</p>
            <MultiSwitch 
                texts={["Distriburion", "Production"]}
                selectedSwitch={0}
                bgColor={'#004953'}
                onToggleCallback={handleChange}
                fontColor={'#00b2a9'}
                selectedFontColor={'white'}
                selectedSwitchColor={'#00b2a9'}
                eachSwitchWidth={150}
                height={'50px'}
                fontSize={'16px'}/>
        </div>
    )
    
}
export default BusinesModel;