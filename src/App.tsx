import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

export default function App() {
return (
	<BrowserRouter>
		<Navigation/>
		<Routes>
			<Route path='/movie_app_2022' element={<Home />} />
			<Route path='/movie_app_2022/about' element={<About />} />
			<Route path='/movie_app_2022/movie-detail' element={<Detail />} />
		</Routes>
	</BrowserRouter>
	);
}
