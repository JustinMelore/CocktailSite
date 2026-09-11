import { Link } from "react-router";
import style from "./DrinkCard.module.css";
export default function DrinkCard({drinkObject}) {
    return (
      <Link className={style.drinkCardLink} to={`/drinks/${drinkObject.name}`}>
        <article className={style.drinkCard}>
          <img alt={`${drinkObject.name ? drinkObject.name : "Drink"} Image`}/>
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