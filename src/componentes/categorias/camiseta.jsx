import React from "react";
import { useParams } from "react-router-dom";

import { Tarjeta } from "../tarjeta/tarjeta";
import styles from "./categoria.module.css";

const Camiseta = ({ productos }) => {
  const { category } = useParams();
  const producto = productos.find((producto) => producto.category == camiseta);
  return (
    <div className={styles.container}>
      {productos.map((producto) => (
        <Tarjeta key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Camiseta
