import React from "react"
import MultiSwitch from "react-multi-switch-toggle"


class BusinesModel extends React.Component {
    
    onToggle = (selectedItem) => {
        this.props.onChange(selectedItem);
        //selectedItem.preventDefault();
    }

    /*onToggle(selectedItem){
        console.log(selectedItem)
    }*/
    render(){
        return(
            <div>
                <MultiSwitch 
                    texts={["Distriburion", "Production"]}
                    selectedSwitch={0}
                    bgColor={'#004953'}
                    onToggleCallback={this.onToggle}
                    fontColor={'#00b2a9'}
                    selectedFontColor={'white'}
                    selectedSwitchColor={'#00b2a9'}
                    eachSwitchWidth={150}
                    height={'50px'}
                    fontSize={'16px'}/>
            </div>
        )
    }
}
export default BusinesModel;