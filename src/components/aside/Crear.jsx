import React, { useState } from 'react'
import { storeInStorage } from '../../helpers/StoreInStorage';

export const Crear = ({setmovieList}) => {

  const title = 'Añadir Película';

  //Estado Película
  const [movie, Setmovie] = useState({})

  const getData = e => {
    e.preventDefault();
    //Datos del formulario en un objeto
    //Para crear un id lo creo con la fecha actual
    let moviedata = {
      id: new Date().getTime(),
      title: e.target.title.value,
      description: e.target.description.value
    };
    //Seteo el estado Película con lo obtenido del formulario
    Setmovie(moviedata);
    setmovieList(elements => {
      return [...elements, moviedata];
    })
    // Guardo en LocalStorage la pelicua helper storeinStorage
    storeInStorage('movies', moviedata);
  };
  
  return (
    <div className="add">
        <h3 className="title">{title}</h3>
        
        <form onSubmit={getData}>
            <input name='title' type="text" placeholder="Title"  />
            <textarea name='description' placeholder="Descripción"></textarea>
            <input type="submit" value="Guardar" />
        </form>
    </div>
  )
}
