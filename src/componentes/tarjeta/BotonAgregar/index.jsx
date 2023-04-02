import React, { useContext } from "react";
import CarritoContext from "../../../Carrito.context";

const BotonAgregar = ({ producto }) => {
  const [ carrito, setCarrito ] = useContext(CarritoContext);
  const addCarrito = () => {
    const nuevoProducto = producto;
    setCarrito([...carrito, nuevoProducto]);
    
  };
  return <button onClick={addCarrito}>Agregar al Carrito</button>;
};

export default BotonAgregar;

