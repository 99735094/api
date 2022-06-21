
//import { useState, useEffect } from "react";

import { Container, MoviesList, Movies } from "./styles";


function App() {

  //const [ movies, setMivies] = useState(['']);


  const movies = [
    { 
      id:1,
      title: 'Spider Man',
      image_url:'https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg'
    },
    { 
      id:2,
      title: 'Encanto',
      image_url:'https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg?region=0,225,1080,1046&width=960'
    },
    {
      id:3,
      title: 'Thor  Amor Traicao',
      image_url:'https://br.web.img2.acsta.net/c_310_420/pictures/22/05/24/16/24/4837466.jpg'
    },
    {
      id:4,
      title: 'Doctor Strange',
      image_url:'https://media.fstatic.com/0uNJJ58e6Hce07gFEKGrlirflKM=/268x386/smart/media/movies/covers/2022/04/Multiverse_of_Madness_Theatrical_Release_Poster.jpg'
    },
    {
      id:5,
      title: 'Homen de Ferro',
      image_url:'https://tm.ibxk.com.br/2022/05/04/04181552447728.jpg?ims=252x144'
    },
    {
      id:6,
      title: 'Mônica',
      image_url:'https://www.omelete.com.br/webstories/sequencias-melhores-originais/assets/1.jpeg'
    },
    { 
      id:1,
      title: 'Spider Man',
      image_url:'https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg'
    },
    { 
      id:2,
      title: 'Encanto',
      image_url:'https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg?region=0,225,1080,1046&width=960'
    },
    {
      id:3,
      title: 'Thor  Amor Traicao',
      image_url:'https://br.web.img2.acsta.net/c_310_420/pictures/22/05/24/16/24/4837466.jpg'
    },
    {
      id:4,
      title: 'Doctor Strange',
      image_url:'https://media.fstatic.com/0uNJJ58e6Hce07gFEKGrlirflKM=/268x386/smart/media/movies/covers/2022/04/Multiverse_of_Madness_Theatrical_Release_Poster.jpg'
    },
    {
      id:5,
      title: 'Homen de Ferro',
      image_url:'https://tm.ibxk.com.br/2022/05/04/04181552447728.jpg?ims=252x144'
    },
    {
      id:6,
      title: 'Mônica',
      image_url:'https://www.omelete.com.br/webstories/sequencias-melhores-originais/assets/1.jpeg'
    },
    { 
      id:1,
      title: 'Spider Man',
      image_url:'https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg'
    },
    { 
      id:2,
      title: 'Encanto',
      image_url:'https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg?region=0,225,1080,1046&width=960'
    },
    {
      id:3,
      title: 'Thor  Amor Traicao',
      image_url:'https://br.web.img2.acsta.net/c_310_420/pictures/22/05/24/16/24/4837466.jpg'
    },
    {
      id:4,
      title: 'Doctor Strange',
      image_url:'https://media.fstatic.com/0uNJJ58e6Hce07gFEKGrlirflKM=/268x386/smart/media/movies/covers/2022/04/Multiverse_of_Madness_Theatrical_Release_Poster.jpg'
    },
    {
      id:5,
      title: 'Homen de Ferro',
      image_url:'https://tm.ibxk.com.br/2022/05/04/04181552447728.jpg?ims=252x144'
    },
    {
      id:6,
      title: 'Mônica',
      image_url:'https://www.omelete.com.br/webstories/sequencias-melhores-originais/assets/1.jpeg'
    }
  ]
  /*useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1')
    .then(response =>response.json )
    .then(data => console.log(data) )
  }, []);*/
  return (
    <Container>
     <h1>Movies PFX</h1>
     <MoviesList>
        {
          movies.map(movies => {
            return(
              <Movies key={movies.id}>
                 <a href="http://google.com.br"><img src={movies.image_url}/></a>      
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
