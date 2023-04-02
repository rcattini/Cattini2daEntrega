import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import AppBar from "@mui/material/AppBar";
import miImagen from "../../../public/img/logoRafa.png";
import CarritoConteo from "../CarritoConteo";
// import styled from "@emotion/styled";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <AppBar position="static" color="secondary">
      <div className={styles.conteiner}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div className={styles.logo}>
            <img src={miImagen} alt="logo" />
          </div>
        </NavLink>

        <nav className={styles.barra}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p>Home</p>
          </NavLink>
          <NavLink to="productos">
            <p>Productos</p>
          </NavLink>
          <NavLink to="productos/camiseta">
            <p> Camisetas</p>
          </NavLink>
          <NavLink to="productos/Accesorio">
            <p>Acsesorios</p>
          </NavLink>
          <NavLink to="productos/Libros">
            <p>Libros</p>
          </NavLink>
    
          <NavLink to="carrito">
            <CarritoConteo/>
          </NavLink>
        </nav>
      </div>
    </AppBar>
  );
};

export default Navbar;
