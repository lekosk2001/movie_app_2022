import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';

export default function App() {
return (
	<BrowserRouter>
		<Navigation/>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
		</Routes>
	</BrowserRouter>
	);
}
