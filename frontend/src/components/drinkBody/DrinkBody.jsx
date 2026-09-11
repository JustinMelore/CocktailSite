import style from "./DrinkBody.module.css";

export default function DrinkBody({drinkObject}) {
    
    const drinkName = drinkObject ? drinkObject.name : "Drink";
    
    return(
        <article className={style.drinkBody}>
            <div className={style.dummy}>
                <img alt={drinkName + " Image"}/>
            </div>
            <section>
                <h1>{drinkName}</h1>
                <h2>Ingredients</h2>
                <ul>
                    {
                        drinkObject.ingredients.map((elem, idx) => {
                            return <li key={idx}>{`${elem.ingredient} - ${elem.quantity}`}</li>
                        })
                    }
                </ul>
                <h2>Garnish</h2>
                <ul>
                    {
                        drinkObject.garnish.map((elem, idx) => {
                            return <li key={idx + drinkObject.ingredients.length}>{elem}</li>
                        })
                    }
                </ul>
            </section>
        </article>
    );
}