import React from 'react'

const BotonEliminar = ({ productos,  deleteProductos }) => {
  return (
    <button onClick={() => deleteProductos(productos.id)}>Delete</button>
  )
}

export default BotonEliminar