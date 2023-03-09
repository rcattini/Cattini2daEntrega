import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Listaproductos from "./componentes/listaProductos";
import { Routes, Route } from "react-router-dom";
import Home from "./componentes/home";
import Carrito from "./componentes/carrito";
import Navbar from "./componentes/navbar/navbar";
import Itemproductos from "./componentes/itemproductos/itemproductos";
import Footer from "./componentes/footer";

function App() {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
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
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<h2> 404</h2>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
