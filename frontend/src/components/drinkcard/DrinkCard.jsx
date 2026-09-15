import { Link } from "react-router";
import style from "./DrinkCard.module.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { useEffect } from "react";
export default function DrinkCard({drinkObject}) {
    
    const [imgSrc, setImgSrc] = useState(logo);
    
    useEffect(() => {
      async function getImage() {
        try {
          const url = import.meta.env.VITE_DEV_URL || "/";
          const response = await fetch(url + "api/images/" + drinkObject.image);
          if(!response.ok) {
            return setImgSrc(logo);
          }
          const imgBlob = await response.blob();
          setImgSrc(URL.createObjectURL(imgBlob));
        } catch {
          setImgSrc(logo);
        }
      }
      if(drinkObject && drinkObject.image)
        getImage();
    }, [imgSrc, drinkObject]);

    return (
      <Link className={style.drinkCardLink} to={`/drinks/${drinkObject.name}`}>
        <article className={style.drinkCard}>
          <img alt={`${drinkObject.name ? drinkObject.name : "Drink"} Image`} src={imgSrc}/>
          <h2>{drinkObject && drinkObject.name ? drinkObject.name : "Drink Name"}</h2>
          <ul>
              {
                drinkObject.ingredients.map((elem, index, array) => {
                  return <li key={index}>{elem.ingredient} {index == array.length - 1 ? "" : "/"}</li>
                })
              }
          </ul>
        </article>
      </Link>
    );
}