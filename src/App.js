import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as MenuData from './menu.json';
import Root from './components/Root';
function App() {
	//console.log('MenuData', MenuData.menuDetails);
	return <Root menuDataDetails={MenuData.menuDetails}/>;
}
export default App;
