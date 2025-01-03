import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One", "Two"]);

  /*  const onAddCategory = () => {
    setCategories([...categories, "Three"]);
    
  };
 */
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      {/*       <button onClick={onAddCategory}>Agregar</button>
       */}{" "}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{categories}</li>;
        })}
      </ol>
    </>
  );
};

/* UseState no puede estar dentro de un condicional, los states estan en orden */
