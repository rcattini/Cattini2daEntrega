import React from "react";
import { Tarjeta } from "../tarjeta/tarjeta";
import styles from "./categoria.module.css";

const Accesorio = ( {productos} ) => {
  const productosAccesorio = productos.filter(function(producto) {
    return producto.category === 'Accesorio';
  });
  return (
    <div>
      <h2>Lista de Accesorios</h2>
    <div className={styles.container}>
      {productosAccesorio.map((producto) => (
        <Tarjeta key={producto.id} producto={producto} />
      ))}
    </div>
    </div>
  );
}

export default Accesorio