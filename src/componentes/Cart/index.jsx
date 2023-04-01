import { useContext } from "react";
import CarritoContext from "../../Carrito.context";

const Carrito = () => {
  const [ carrito] = useContext(CarritoContext);

console.log(carrito)
  return (
    <div><h2>Carrito</h2>
      <div>
        {carrito.map((producto) => (
          <div>
            <h2>{producto.title}</h2> 
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carrito;
