import { Component } from "react";
import FormInput from "./formInput/formField";

class AddToDo extends Component{

    constructor(props){
        super(props);
        this.state= {}
    }

    render () {
        return (
            <>
            <div className="p-2">
                <h3>Create Todo</h3>
                <form>
                    <FormInput inputType="text" defaultValue="Add to do here"/>
                    <button className="btn btn-success">submit</button>
                </form>
            </div>
            </>
        )
    }
}

export default AddToDo;