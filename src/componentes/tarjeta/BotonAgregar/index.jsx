import React, { useContext } from "react";
import CarritoContext from "../../../Carrito.context";

const BotonAgregar = ({ producto }) => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const addCarrito = () => {
    const nuevoProducto = producto.id;
    setCarrito([...carrito, nuevoProducto]);
    console.log(carrito)
  };
  return <button onClick={addCarrito}>Agregar al Carrito</button>;
};

export default BotonAgregar;

