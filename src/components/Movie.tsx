import './Movie.css';
import {Link} from 'react-router-dom';

type Props = {
    year:number;
    title:string;
    summary:string;
    poster:string;
    genres:Array<string>;
}

export default function Movie ({year,title,poster,genres,summary}: Props) {
    if(genres===undefined){genres=[]} //props에 장르가 없을때, 장르props를 빈 배열로 변환.

    return (
        <div className="movie">
            <Link to="/movie-detail" state={{year,title,summary,poster,genres}}>
                <img src={poster} alt={title} title={title}></img>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <p className="movie_summary">{summary.slice(0,180)}</p>
                    <ul className='movie_genres'>
                        {genres.map((genre,index)=>{
                            return <li key={index} className='movie_genre'>{genre}</li>;
                        })}
                    </ul>
                </div>
            </Link>
        </div>
    );
}