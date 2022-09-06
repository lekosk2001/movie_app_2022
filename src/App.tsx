import axios from "axios";
import { useState,useEffect } from "react";
import Movie from './Movie'

export default function App() {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [stateMovies, setStateMovies] = useState([{
		id:0,
		year:0,
		title:"",
		summary:"",
		poster:""
	}]);

	const getMoives = async()=>{
		const {
			data : {
				data:{movies},
			},
		} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=year)');
		setStateMovies(movies)
		setIsLoading(false)
	}

	useEffect(() => {
		getMoives();
	}, []);

	return (
		<section>
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
									id={movie.id}
									year={movie.year}
									title={movie.title}
									summary={movie.summary}
									poster={movie.poster}
								/>
							}
						)
					}</div>
				)
				
			}
		</section>
	);
}