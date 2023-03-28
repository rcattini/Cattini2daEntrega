import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import db from "../../../db/firebase-config";

const Form = ({ setProductos }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const addItem = async (e) => {
    e.preventDefault();
    const producto = {
      title: inputTitle,
      price: inputPrice,
    };
    const productosCollectionRef = collection(db, "productos");
    await addDoc(productosCollectionRef, producto);
    const productosCollection = await getDocs(productosCollectionRef);
    setProductos(
      productosCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setInputTitle("");
    setInputPrice("");
  };

  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        value={inputTitle}
        placeholder="title"
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <input
        type="text"
        value={inputPrice}
        placeholder="price"
        onChange={(e) => setInputPrice(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;