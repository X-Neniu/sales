import React,  { useEffect, useState, setState } from "react";

import RegionsSelect from "./RegionsSelect";
import RegionsNMap from "./RegionsNMap"
import SalesVerticales from "./SalesVerticales";
import BusinesModel from "./BusinesModel"


class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            businesModel_value: null
        }
    }
    
    onChange_BusinesModel = (bmValue) =>{
        this.setState({businesModel_value: bmValue})
        console.log(this.state.businesModel_value, "    ",bmValue)
    }
   

    render(){
        const bm = this.state.businesModel_value
        return( 
            <div>    
                <RegionsNMap/>
                <SalesVerticales/>
                <BusinesModel onChange = {this.onChange_BusinesModel}/>
                {bm}
            </div>   
        );
    }
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