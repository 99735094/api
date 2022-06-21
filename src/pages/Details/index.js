import { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom'
import { Container} from './styles'


function Details(){

const chave = 'f4fd6fb5e14df4b7bd41bb51aff5a8a6';    
const [movie, setMovie] = useState({});
const {id} = useParams(); 
const image = 'https://image.tmdb.org/t/p/w500';

useEffect( () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${chave}&language=en-US&page=1`)
    .then(response =>response.json() )
    .then(data => {
        const { title, poster_path, overview, releaseDate} = data;
        const movie = {
            id,
            title,
            sinopse: overview,
            image: `${image}${poster_path}`,
            releaseDate: releaseDate
        }
        setMovie(movie);
    } )
},[id]);

    return(
        <Container>
          <div className='movie'>
              <img src={movie.image} alt='movie.sinopse'/>
              <div className='details'>
                <h1> {movie.title} </h1>  
                <span>Sinopse: {movie.sinopse} </span>
                <span className='release-date'> Rekease date {movie.releaseDate}</span>
                <Link to= '/'><button>Go Back</button></Link>
              </div>
          </div>  
        </Container>
    )
}
export default Details;