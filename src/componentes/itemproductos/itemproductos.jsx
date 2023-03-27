import React from "react";
import { useParams } from "react-router-dom";
import styles from "./itemproductos.module.css";

const Itemproductos = ({ productos }) => {
  const { id } = useParams();
  const producto = productos.find((producto) => producto.id == id);
  return (
    <div className={styles.conteiner}>
      <h4>{producto.title}</h4>
      <img src={producto.image.a} alt="" />
      <img src={producto.image.b} alt="" />
      <p>{producto.description}</p>
      <p>$ {producto.price}</p>
      
    </div>
  );
};

export default Itemproductos;
