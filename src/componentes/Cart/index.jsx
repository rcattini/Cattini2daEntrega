import { useContext } from "react";
import CarritoContext from "../../Carrito.context";

const Carrito = () => {
  const [carrito, setCarrito] = useContext(CarritoContext);
  const borrarArticulo = (productoId) => {
    const carritoActualizado = carrito.filter(
      (producto) => producto.id != productoId
    );
    setCarrito(carritoActualizado);
  };

  return (
    <div>
      <h2>Carrito</h2>
      <div>
        {carrito.map((producto) => (
          <div key={producto.id}> 
            <h2>{producto.title}</h2>
            <button onClick={() => borrarArticulo(producto.id)}>
              Borrar articulo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carrito;
