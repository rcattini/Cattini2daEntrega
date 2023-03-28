import { Link } from "react-router-dom";
import Form from "../Form";

const ListItems = ({ productos, setProductos, deleteProductos }) => {
  return (
    <div>
      <Form setProductos={setProductos} />
      {productos.map(() => (
        <div key={productos.id}>
          <Link to={`${productos.id}`}>
            <h2>{productos.title}</h2>
            <button onClick={() => deleteProductos(productos.id)}>Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListItems;