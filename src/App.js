// import logo from './logo.svg';
import { Component } from 'react';
import './App.scss';
import ToDo from './components/toDo';

class App extends Component {

  render (){
	return (
		<div>
        <h1>Learning React with a simple todo application</h1>
			<div className='container m-auto p-0'>
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
    </div>
	)}
}

export default App;
