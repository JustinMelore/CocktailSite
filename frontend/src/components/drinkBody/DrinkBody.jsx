import style from "./DrinkBody.module.css";

export default function DrinkBody({drinkObject}) {
    
    const drinkName = drinkObject ? drinkObject.name : "Drink";
    
    return(
        <article className={style.drinkBody}>
            <div className={style.upperContainer}>
                <section className={style.dummy}>
                    <img alt={drinkName + " Image"}/>
                </section>
                <section className={style.materialsSection}>
                    <h1>{drinkName}</h1>
                    <div className={style.listParentContainer}>
                        <div className={style.listContainer}>
                            <h2>Ingredients</h2>
                            <ul>
                                {
                                    drinkObject.ingredients.map((elem, idx) => {
                                        return <li key={idx}>{`${elem.ingredient} - ${elem.quantity}`}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className={style.listContainer}>
                            <h2>Garnish</h2>
                            <ul>
                                {
                                    drinkObject.garnish.map((elem, idx) => {
                                        return <li key={idx + drinkObject.ingredients.length}>{elem}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <section className={style.stepsSection}>
                <h2>Steps</h2>
                <ol>
                    {
                        drinkObject.steps.map((elem, idx) => {
                            return <li key={idx}>{elem}</li>
                        })
                    }
                </ol>
            </section>
        </article>
    );
}