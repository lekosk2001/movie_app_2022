import './Movie.css';

type Props = {
    year:number;
    title:string;
    summary:string;
    poster:string;
    genres:Array<string>;
}

export default function Movie ({year,title,poster,genres,summary}: Props) {
    return (
        <div className="movie">
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
        </div>
    );
}