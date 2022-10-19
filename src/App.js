import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import AppNavbar from './components/shared/navbar/navbar';

class App extends Component {

  render (){
	return (
		<div className='container-fluid'>
			<AppNavbar />
			<Outlet />
    	</div>
	)}
}

export default App;
