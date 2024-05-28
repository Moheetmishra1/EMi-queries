import './MovieBox.css'


export default function MovieBox({title,year,rated,released,runtime,genre,actors,poster,country,language}){ 

    return (
        <div className="box">
            <img src={poster} alt=""  height="350px" width="100%" />
            <p id='title'>Title: {title}</p>
            <p>Actors: {actors}            </p>
            <div><p>Genre: {genre}</p></div>
            <div><p>Runtime: {runtime}</p><p>Released: {released}</p></div>
            <div><p>Year: {year}</p><p>Rated: {rated}</p></div>
            <div><p>Country:{country}</p><p>Lang:{language}</p></div>

        </div>

    )
}