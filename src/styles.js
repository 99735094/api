import styled from  'styled-components';

export const Container = styled.div`
   
    h1{
      text-align: center;
      margin: 4rem 0;     
    }  
`
export const MoviesList = styled.ul`
    list-style: none; 
    display:grid; // utilizar colunas
    //grid-template-columns: repeat(3, 1fr); 
    //3 numero de coluna, 1fr ocupa todo o espaco da fila
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); // unidade responsiva
    column-gap: 3rem;
    row-gap: 4rem;   
`
export  const Movies = styled.li`
    
    display:flex;
    flex-direction:column;
    align-items:center;
    img {
        width: 180px;
        //height: 300px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    span {
        font-weight: bold;
        font-size: 120%;
    }
    a{
        transition: all 0.3s;
    }
    a:hover {
       transform: scale(1.1);
   }
    
`