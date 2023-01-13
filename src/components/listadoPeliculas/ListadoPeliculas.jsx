import React, { useEffect, useState } from 'react'
import { EditMovie } from './EditMovie';

export const ListadoPeliculas = ({movieList, setmovieList}) => {

  //Estado del componente - lo declaro en el componente padre principal y lo paso por props
  //Donde lo quiera usar lo uso
  //const [movieList, setmovieList] = useState([]);
  
  //useEffect() para ejectar la obtención de películas al montarse
  useEffect(() => { getMovie() }, []);

  //Estado editar flag - inicializado en 0 cambiara al id de la peliícula
  const [movieEdit, setEdit] = useState(0)

  //Método que obtiene peliculas
  const getMovie = () => {
    //Nunca olvidar convertir el string en JS con JSON.PARSE
    let movie = JSON.parse(localStorage.getItem('movies'));
    setmovieList(movie);
    return movie;
  };

  //Eliminado de película
  const deleteMovie = (id) => {
    //Obtengo películas
    let movies = getMovie();

    //Filtro todas las películas que no sean iguales al id que llega 
    let newMovies = movies.filter(element =>  element.id !== parseInt(id))

    //Seteo el nuevo estado del componente menos la película eliminada
    setmovieList(newMovies);

    //Actualizo el localStorage
    localStorage.setItem('movies', JSON.stringify(newMovies));
  };

  const editMovie = (id) => {setEdit(id)};
  return (
    
    <> 
    {/* El estado guarda lo que tiene localStorage, entonces debo verificar que no sea nulo */}
    {/* como también si esta vacío */}
      {movieList != null && movieList.length !== 0 ? (

        movieList.map((element) => {
          return (
  
            <article className="peli-item" key={element.id}>
              <h3 className="Title">{element.title}</h3>
              <p className="description">{element.description}</p>
              <button onClick={() => {editMovie(element.id)}} className="edit">Editar</button>
              <button onClick={() => {deleteMovie(element.id)}} className="delete">Borrar</button>
          
            {/* Aparece formulario de editar */}
            {movieEdit === element.id && <EditMovie pelicula = {element} getMovie = {getMovie} setEdit={setEdit} setmovieList={setmovieList}/> }



            </article>
          )
        })
      ) : (
        <article className="peli-item">
        <h3 className="Title"> No hay Películas para mostrar</h3>
       
      
      </article>
      )
      
      }
   
    </>
    
  )
}
