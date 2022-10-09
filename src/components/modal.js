import { Component } from "react";

class ModalDialog extends Component{

    constructor(props){
        super(props);
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleConfirm(){
        //Some confirmation logic to server goes here.
    }

    handleCancel(){ 
        this.props.handleClose();
    }

    render() {
        return(
            <div className={ `${this.props.modalDisplayClass} overlay` }>
                <div className="modalDialog p-2">
                    Are you sure you want to remove a To Do?
                    <div className="d-flex justify-content-evenly">
                        <div>
                          <button className="btn btn-success">Confirm </button>
                        </div>
                        <div>
                            <button className="btn btn-light" onClick={this.handleCancel}>
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ModalDialog;