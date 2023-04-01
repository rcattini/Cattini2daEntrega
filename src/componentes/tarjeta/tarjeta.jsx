import { Link } from 'react-router-dom';
import BotonAgregar from './BotonAgregar';
import styles from "./tarjeta.module.css";

export const Tarjeta = ({producto}) => {
  return (
    
    <div className={styles.container}>
      <Link to={`${producto.id}`}>
        <h4>{producto.title}</h4>
        <img className={styles.img} src={producto.image.a} alt="" />
        <p>{producto.category}</p>
        <p>$ {producto.price}</p>
        </Link>
        <BotonAgregar producto={producto}/>
    </div>
    
  );
};

export default Tarjeta;

