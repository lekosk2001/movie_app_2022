import './Movie.css';
export interface MovieProps {
    year:number;
    title:string;
    summary:string;
    poster:string;
    genres:Array<string>;
}

export default function Movie (props: MovieProps) {
    return (
        <div className="movie">
            <img src={props.poster} alt={props.title} title={props.title}></img>
            <div className="movie_data">
                <h3 className="movie_title">{props.title}</h3>
                <h5 className="movie_year">{props.year}</h5>
                <p className="movie_summary">{props.summary.slice(0,180)}</p>
                <ul className='movie_genres'>
                    {props.genres.map((genre,index)=>{
                        return <li key={index} className='movie_genre'>{genre}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}