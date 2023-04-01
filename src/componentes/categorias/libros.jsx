import React from "react";
import { Tarjeta } from "../tarjeta/tarjeta";
import styles from "./categoria.module.css";

const Libros = ( {productos} ) => {
  const productosLibros = productos.filter(function(producto) {
    return producto.category === 'Libro';
  });
  return (
    <div>
        <h2>Lista de Libros</h2>
    <div className={styles.container}>
      {productosLibros.map((producto) => (
        <Tarjeta key={producto.id} producto={producto} />
      ))}
    </div>
    </div>
  );
}

export default Libros