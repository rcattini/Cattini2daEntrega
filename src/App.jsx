import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Listaproductos from "./componentes/listaProductos";
import { Routes, Route } from "react-router-dom";
import Home from "./componentes/home";
import Carrito from "./componentes/Cart";
import Navbar from "./componentes/navbar/navbar";
import Itemproductos from "./componentes/itemproductos/itemproductos";
import Footer from "./componentes/footer";
import db from "../db/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import Camiseta from "./componentes/categorias/camiseta";
import CarritoContext from "./Carrito.context";
import Libros from "./componentes/categorias/libros";
import Accesorio from "./componentes/categorias/accesorio";


function App() {
  const [productos, setProductos] = useState([]);
  const productosCollectionRef = collection(db, "productos");
  const [loading, setLoading] = useState(true);
  

  const getProductos = async () => {
    const productosCollection = await getDocs(productosCollectionRef);
    setProductos(
      productosCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setLoading(false);
  };
  const [carrito, setCarrito] = useState(localStorage.getItem("CarritoRafa") ? JSON.parse(localStorage.getItem("CarritoRafa")) : []);
  
  function actualizarCarrito (callback, carrito) {
   localStorage.setItem("CarritoRafa" ,JSON.stringify(carrito))
    callback(carrito)
  }

  useEffect(() => {
    getProductos();
  }, []);

  if (loading) {
    return (
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
    
  }
  

  return (
    <div>
      <CarritoContext.Provider value={[ carrito, (carrito)=> actualizarCarrito(setCarrito, carrito) ]}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/productos"
          element={<Listaproductos productos={productos} />}
        />
        <Route
          path="/productos/:id"
          element={<Itemproductos productos={productos} />}
        />
        <Route
          path="/productos/camiseta"
          element={<Camiseta productos={productos} />}
        />
        <Route
          path="/productos/Accesorio"
          element={<Accesorio productos={productos} />}
        />
        <Route
          path="/productos/Libros"
          element={<Libros productos={productos} />}
        />

        <Route path="/carrito" element={<Carrito/>} />
        
        <Route path="*" element={<h2> 404</h2>} />
      </Routes>
      </CarritoContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
