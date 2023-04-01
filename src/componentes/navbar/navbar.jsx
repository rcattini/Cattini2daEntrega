import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import AppBar from "@mui/material/AppBar";
import { IconButton } from "@mui/material";
import miImagen from "../../../public/img/logoRafa.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Carrito from "../Cart";
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
            <IconButton aria-label="cart" color="primary">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>
        </nav>
      </div>
    </AppBar>
  );
};

export default Navbar;
