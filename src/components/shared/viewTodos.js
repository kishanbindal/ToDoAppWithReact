import { Component } from "react";
import ToDo from "../toDo";

class ViewTodos extends Component{
    render(){
        return (
			<div className='m-auto p-0'>
				<div className='row p-2'>
					<div className='col-md p-2'>
						<ToDo title="Create Basic React Application"/>
					</div>
					<div className='col-md p-2'>
						<ToDo title="Style Using Bootstrap"/>
					</div>
					<div className='col-md p-2'>
						<ToDo title="Connect to backend and test real world application"/>
					</div>														
				</div>
			</div>
        )
    }
}

export default ViewTodos;