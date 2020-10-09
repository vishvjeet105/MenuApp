import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as MenuData from './menu.json';
function App() {
	console.log('MenuData', MenuData.menuDetails);
	return <div className='App'>Hello World</div>;
}

export default App;
