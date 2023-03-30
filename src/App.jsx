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
import db from "../db/firebase-config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import Camiseta from "./componentes/categorias/camiseta";
import ListItems from "./componentes/ListItems";
import ItemDetail from "./componentes/ItemDetail";

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

  useEffect(() => {
    getProductos();
  }, []);

  if (loading) {
    return (
      <div class="lds-grid">
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
          path="/productos/:category.camiseta"
          element={<Camiseta productos={productos} />}
        />

        <Route path="/carrito" element={<Carrito />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="*" element={<h2> 404</h2>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
