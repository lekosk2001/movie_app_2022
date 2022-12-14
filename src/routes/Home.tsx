import axios from "axios";
import { useState,useEffect } from "react";
import Movie from '../components/Movie'
import './Home.css';

export default function Home() {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [stateMovies, setStateMovies] = useState([{
		id:0,
		year:0,
		title:"",
		summary:"",
		medium_cover_image:"",
		genres:[""]
	}]);

	const getMoives = async()=>{
		const {
			data : {
				data:{movies},
			},
		} = await axios.get('https://yts-proxy.now.sh/list_movies.json)');
		setStateMovies(movies)
		setIsLoading(false)
	}

	useEffect(() => {
		getMoives();
	}, []);

	return (
		<section className="container">
			{isLoading?
				(
					<div className="loader">
						<span className="loader_text">'Loading...'</span>
					</div>
				)
				:(
					<div className="movies">{
						stateMovies.map(
							(movie)=>{
								return <Movie
									key={movie.id}
									year={movie.year}
									title={movie.title}
									summary={movie.summary}
									poster={movie.medium_cover_image}
									genres={movie.genres}
								/>
							}
						)
					}</div>
				)
				
			}
		</section>
	);
}