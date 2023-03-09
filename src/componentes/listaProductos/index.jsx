import React from "react";
import { Tarjeta } from "../tarjeta/tarjeta";
import styles from "./listaProductos.module.scss";

const Listaproductos = ({ productos }) => {
  return (
    <div className={styles.container}>
      {productos.map((producto) => (
        <Tarjeta key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default Listaproductos;
