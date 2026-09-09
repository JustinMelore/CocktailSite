import style from "./DrinkCard.module.css";
export default function DrinkCard({drinkObject}) {
    return (
      <article className={style.drinkCard}>
        <div className={style.dummy}>
          <h2>{drinkObject && drinkObject.name ? drinkObject.name : "Drink Name"}</h2>
          <img alt={`${drinkObject.name ? drinkObject.name : "Drink"} Image`}/>
          <h3>Ingredients</h3>
          <ul>
              {
                drinkObject.ingredients.map((elem, index) => {
                  return <li key={index}>{elem.ingredient}</li>
                })
              }
          </ul>
        </div>
      </article>  
    );
}