import React, { useEffect, useState } from "react"

const SalesVerticales = ({isSalesSelected})=>{

    const [salesChecked, setSalesChecked] = useState(0)

    const onChange=(e)=>{
        console.log(e.target.checked)
        if (e.target.checked) {
            setSalesChecked((salesChecked)+1)
        }
        else{
            setSalesChecked((salesChecked)-1) 
        }
    }
    useEffect(()=>{
        salesChecked>0?isSalesSelected(true):isSalesSelected(false)
    },[salesChecked])
    

    return(
        <div>
            <p>Choose sales verticales:</p>            

            <div>
                <input type="checkbox" id="onLand" name="onLand" onChange={onChange}/>
                <label for="onLand">On Land</label>
            </div>

            <div>
                <input type="checkbox" id="marine" name="marine" onChange={onChange}/>
                <label for="marine">Marine</label>
            </div>

            <div>
                <input type="checkbox" id="air" name="air" onChange={onChange}/>
                <label for="air">Air</label>
            </div>                       

            <div>
                <input type="checkbox" id="offshore" name="offshore" onChange={onChange}/>
                <label for="offshore">Offshore</label>
            </div>

            <div>                
                <input type="checkbox" id="navy" name="navy" onChange={onChange}/>
                <label for="navy">Navy</label>                
            </div>

            <div>
                <input type="checkbox" id="military" name="military" onChange={onChange}/>
                <label for="military">Military</label>
            </div>
            
        </div>
        
    )
}
export default SalesVerticales;