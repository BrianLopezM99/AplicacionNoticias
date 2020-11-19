import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definit categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=b1d84cca8054484ba6a47a9a7218ace4`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])
  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
