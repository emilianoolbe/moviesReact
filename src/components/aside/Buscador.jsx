import React, { useState } from 'react'

export const Buscador = ({movieList, setMovielist}) => {
  
  //Estado de busqueda
  const [search, setSearch] = useState('');

  //Estado de encontrado
  const [notFound, setFound] = useState(false);

  const searchMovie = (e) => {
    
    //Seteo el estado de busqueda con la data ingresada por el usuario en el input
    setSearch(e.target.value);
  
    //Obtengo un filtrado - Lo que tengo en el estado de peliculas si incluye lo que guarda el estado de busqueda
    let movieFound = movieList.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
    ;
    //Si el estado de busqueda tiene 1 o menos strings y las coincidencias entre estados es nula. Seteo el resultado de busqueda
    // a todo lo que exista en localStorage (listado original)
    if (search.length <= 1 || movieFound.length <= 0) {
      movieFound = JSON.parse(localStorage.getItem('movies'));
      setFound(true);

    }else{
      setFound(false);
    }

    //Seteo al listado de busqueda lo encontrado, ya sea todo lo orginal, o las coincidencias que existan
    setMovielist(movieFound);
    return movieFound;
  };

  return (
    <div className="search">
        <h3 className="title">Buscar: {search}</h3>
        {(notFound && search.length > 0) && <h3 className='notFound'>No hay resultados para su búsqueda</h3> }
        <form>
        <input onChange={searchMovie} autoComplete='off'  name='search'  type="text" />
        <button>Buscar</button>
        </form>
    </div>
  )
}
