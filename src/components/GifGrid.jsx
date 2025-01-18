import { useEffect, useState } from "react";
import { getGifs } from "../Api";
import "/src/styles.css";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  //A useeffect no se le puede poner dentro una función async
  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <div className="card" key={id}>
            <img src={url} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
