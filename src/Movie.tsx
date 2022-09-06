export interface MovieProps {
    id: number;
    year:number;
    title:string;
    summary:string;
    poster:string;
}

export default function Movie (props: MovieProps) {
    return (
        <div className="movie_data">
            <h3 className="movie_title">{props.title}</h3>
            <h5 className="movie_year">{props.year}</h5>
            <p className="movie_summary">{props.summary}</p>
        </div>
    );
}