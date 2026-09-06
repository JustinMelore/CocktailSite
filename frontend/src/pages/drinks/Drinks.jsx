import { useEffect } from "react";
import DrinkCard from "../../components/drinkcard/DrinkCard"
import { useState } from "react";
export default function Drinks() {

    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        async function getDrinks() {
            try {
                const response = await fetch("/api/drinks");
                setDrinkList(await response.json());
            } catch(e) {
                console.error(e);
            }
        }
        getDrinks();
    }, []);
    
    return (
        <>
            <h1>DRINKS</h1>
            {
                drinkList.map((elem) => {
                    return (
                        <DrinkCard drinkObject={elem}/>
                    )
                })
            }
        </>
    )
}