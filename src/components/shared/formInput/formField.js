import { Component } from "react";

class FormInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            isValid: false
        }
    }

    render(){
        return(
            <div>
                <input 
                    type={this.props.inputType}
                    value={this.props.defaulValue}
                >
                </input>
            </div>
        )
    }
}

export default FormInput