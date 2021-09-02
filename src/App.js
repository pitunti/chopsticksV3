import logo from './logo.svg';

import './App.scss';

import './Header.scss';
import { SideBar } from './components/sideBar/SideBar';
import {  Delivers } from './components/redersSociales/Delivers';
import db from "./chopsticks.json"
import React from 'react';

const DBContext = React.createContext(db)
function App() {
  const { data: productos } = db[11];
  const { data: categorias } = db[2];
  let productosObj = []

  productos.map(({ name, info, id_categoria, id }) => {
    const cat = categorias.find(c => c.id == id_categoria);
    productosObj = [...productosObj, {
      name,
      category: cat.name,
      description: JSON.parse(info),
      

    }]
  })

  //Separando las categorias
  const Appetizers = productosObj.filter(p => p.category === "Appetizers");
  const Soups=  productosObj.filter(p => p.category === "Soups");
  const  Salads=  productosObj.filter(p => p.category === "Salads");

  console.log(productosObj)
  return (
    <DBContext.Provider value={db}>

      <div className="pagina">
        <header id="home">
          <div className="content">
            <div className="title">
              <h1 >Chopsticks</h1>
              <h2>Sushi y mas!</h2>
            </div>
            <Delivers />
          </div>
          <SideBar className="sideBar" />
        </header>

        <main>
          <div className="menu">
            
            <div className="categoria">
              <div className="contenido">
                <h1 id="appetizers">Appetizers</h1>
                {Appetizers.map(({ name, id_categoria, id, description: { detalles,locacionesPrecio } }) => {
                  return (
                    <div key={name} className="producto">
                      <p className="name">
                        {name}
                        <p className="detalles">{detalles}</p>
                      </p>
                      <p className="precio" >${locacionesPrecio.Village}</p>
                      
                    </div>
                  )
                })}

              </div>
            </div>
            {/* Categoria */}

            <div className="categoria">
              <div className="contenido">
                <h1 id="soups">Soups</h1>
                {Soups.map(({ name, id_categoria, id, description: { detalles,locacionesPrecio } }) => {
                  return (
                    <div key={name} className="producto">
                      <p className="name">
                        {name}
                        <p className="detalles">{detalles}</p>
                      </p>
                      <p className="precio" >${locacionesPrecio.Village}</p>
                      
                    </div>
                  )
                })}

              </div>
            </div>
            {/* Categoria */}

            <div className="categoria">
              <div className="contenido">
                <h1 id="salads">Salads</h1>
                {Salads.map(({ name, id_categoria, id, description: { detalles,locacionesPrecio } }) => {
                  return (
                    <div key={name} className="producto">
                      <p className="name">
                        {name}
                        <p className="detalles">{detalles}</p>
                      </p>
                      <p className="precio" >${locacionesPrecio.Village}</p>
                      
                    </div>
                  )
                })}

              </div>
            </div>
            {/* Categoria */}


          </div>
        </main>
      </div>
    </DBContext.Provider>
  );
}

export default App;
