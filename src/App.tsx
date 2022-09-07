import React from 'react';
// import Home from './routes/Home';
import './App.css';
import { HashRouter,Route } from 'react-router-dom';
import About from './routes/About';

export default function App() {
return (
	<HashRouter>
		<Route path='/about'/>
	</HashRouter>
);
}
