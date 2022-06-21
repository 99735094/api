
import { useState, useEffect } from "react";

import { Container, MoviesList, Movies } from "./styles";
import { Link } from "react-router-dom";

function App() {

  const [movies, setMovies] = useState([ ]);
  const chave = 'f4fd6fb5e14df4b7bd41bb51aff5a8a6';
  const image = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${chave}&language=en-US&page=1`)
    .then(response =>response.json() )
    .then(data => setMovies(data.results) )
  }, []);
  return (
    <Container>
     <h1>Movies PFX</h1>
     <MoviesList>
        {
          movies.map(movies => {
            return(
              <Movies key={movies.id}>
                <Link to={`/details/${movies.id}`}><img src={`${image }${movies.poster_path}`}/></Link>    
                 <span>{movies.title}</span>
              </Movies>
            );
          })
        }
     </MoviesList>
    </Container>
  );
}

export default App;
