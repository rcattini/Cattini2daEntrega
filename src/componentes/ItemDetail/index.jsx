import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import db from "../../../db/firebase-config";

const ProductoDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  const getProducto = async (id) => {
    const docRef = doc(db, "productos", id);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProducto(docSnap.data());
    } else {
      setProducto(null);
    }
  };

  useEffect(() => {
    getProducto(id);
  }, [id]);

  if (!producto) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <h2>{producto.title}</h2>
      <h3>{producto.description}</h3>
      <h3>$ {producto.price}</h3>
    </div>
  );
};

export default ProductoDetail;