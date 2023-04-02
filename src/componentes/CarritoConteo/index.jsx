import { Badge, IconButton } from '@mui/material';
import React, { useContext } from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CarritoContext from '../../Carrito.context';

const CarritoConteo = () => {
    const [ carrito ] = useContext(CarritoContext);
  return (
    <IconButton aria-label="cart" color="primary">
    <Badge badgeContent={carrito.length} color="primary">
      <ShoppingCartIcon />
    </Badge>
  </IconButton>
  )
}

export default CarritoConteo