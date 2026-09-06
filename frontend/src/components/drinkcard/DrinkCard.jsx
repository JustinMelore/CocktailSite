export default function DrinkCard({drinkObject}) {
    return (
      <article>
        <h1>{drinkObject && drinkObject.name ? drinkObject.name : "Drink Name"}</h1>
        <h2>Ingredients</h2>
        <ul>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
        </ul>
      </article>  
    );
}