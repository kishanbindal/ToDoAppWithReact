import { Component } from "react";
import ModalDialog from "./modal";

// function ToDo(props){

//     function handleDelete(){
//         console.log('Clicked', props.title);
//     }

//     return (

//     )
// }

class ToDo extends Component{

    constructor(props){
        super(props)
        this.props = props
        this.state = {
            modalActive: false
        }
        this.modalDisplayClass = "hide";
        // this.handleDelete = this.handleDelete.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }


    async toggleModal(){
        this.setState({modalActive : this.state.modalActive === false ? true : false});
        this.modalDisplayClass = this.state.modalActive === false ? "show" : "hide"
    }

    render(){
        return (
            <div>
                <div className="card col">
                    <div className="col-md-12 p-2">
                        <h3>{ this.props.title }</h3>
                    </div>
                    <div className="col-md-12 p-2">
                        <button className="btn btn-danger" onClick={this.toggleModal}>Delete</button>
                    </div>
                </div>
                <ModalDialog openModal={this.state.modalActive}
                    handleClose = {this.toggleModal}
                    modalDisplayClass={this.modalDisplayClass}/>
            </div>
        )
    }
}

export default ToDo;