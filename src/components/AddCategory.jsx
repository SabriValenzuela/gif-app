import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = (event) => {
    /* se puede poner solo target en ves de event */
    console.log(event.target.value);

    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
if (inputValue.trim().lenght <= 1) return;

/*     setCategories(categories => [inputValue, ...categories]);*/    
onNewCategory(inputValue.trim());
setCategories('');
  };

  return (
    <>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar gif"
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
      </form>
    </>
  );
};
