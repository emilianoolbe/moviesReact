import { ListadoPeliculas } from "./components/listadoPeliculas/ListadoPeliculas";
import {Buscador} from "./components/aside/Buscador";
import {Crear} from "./components/aside/Crear";
import {Header} from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { useState } from "react";

function App() {
  const [movieList, setmovieList] = useState([]);
  return (
    <div className="layout">
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Contenido Principal */}
      <section className="content">
        {/*Películas*/}
       <ListadoPeliculas movieList={movieList} setmovieList={setmovieList}/>
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador movieList={movieList} setMovielist={setmovieList}/>

        <Crear setmovieList={setmovieList}/>
      </aside>

      {/* Pie de página */}
      <footer className="footer">Peliculas Emiliano2023</footer>
    </div>
  );
}

export default App;
