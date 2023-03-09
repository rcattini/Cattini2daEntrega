import { Link } from 'react-router-dom';
import styles from "./tarjeta.module.css";

export const Tarjeta = ({producto}) => {
  return (
    <Link to={`${producto.id}`}>
    <div className={styles.container}>
        <h4>{producto.title}</h4>
        <img className={styles.img} src={producto.image} alt="" />
        <p>{producto.category}</p>
        <p>$ {producto.price}</p>
    </div>
    </Link>
  );
};

export default Tarjeta;

