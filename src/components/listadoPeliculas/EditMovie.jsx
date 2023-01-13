import React from 'react'

export const EditMovie = ({pelicula, getMovie, setEdit, setmovieList}) => {
    let titulo = 'Editar Película'

    const storeEdition = (e, id) => {
        e.preventDefault();
        //obtengo todas las peliculas del localStorage (funcion obtenida por props)
        let movies = getMovie();

        //Busco el indice de la pelicula en el localStorage con el método findIndex()
        let indice = movies.findIndex(element => element.id === id)
        
        //Creo un objeto nuevo con ese indice y los datos obtenidos por el formulario
        let movieUpdate = {
            id,
            title: e.target.title.value,
            description: e.target.description.value
        };

        //Actulizo el elemento con ese índice en el localStorage
        movies[indice] = movieUpdate; 
       
        //Guardo el nuevo array en localStorage
        localStorage.setItem('movies', JSON.stringify(movies))

        //Actulizo estados
        setmovieList(movies);
        setEdit(0)
    };

  return (
    <div className='edit-form'>
        <form onSubmit={e => storeEdition(e, pelicula.id)}>
            <h3 className='title'>{titulo}</h3>
            <input name='title' type="text" defaultValue={pelicula.title}  />
            <textarea name='description'  defaultValue={pelicula.description}></textarea>
            <input className='edit-movie' type="submit" value="Actualizar" />
        </form>
    </div>
  )
}
