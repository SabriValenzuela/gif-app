import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One", "Two"]);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

  setCategories([newCategory, ...categories]);

  
    
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
      /* setCategories={setCategories} */
      onNewCategory ={(value) => onAddCategory(value)}
       />
    
      <ol>
        {/* {categories.map((category) => {
          ( 
        <GifGrid 
        key={category} 
        category={category}
        />
        )
        })} */}
        <GifGrid/>
      </ol>
    </>
  );
};

/* UseState no puede estar dentro de un condicional, los states estan en orden */
