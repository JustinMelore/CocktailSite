import { useEffect } from "react";
import DrinkCard from "../../components/drinkcard/DrinkCard"
import { useState } from "react";
import style from "./Drinks.module.css"
export default function Drinks() {

    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        async function getDrinks() {
            const url = import.meta.env.VITE_DEV_URL || "/";
            console.log(url);
            try {
                const response = await fetch(url + "api/drinks");
                setDrinkList(await response.json());
            } catch(e) {
                console.error(e);
            }
        }
        getDrinks();
    }, []);
    
    return (
        
        <main className={style.drinkPage}>
            <h1>DRINKS</h1>
            <section>
            {
                drinkList.map((elem, index) => {
                    return (
                        <DrinkCard drinkObject={elem} key={index}/>
                    )
                })
            }
            </section>
        </main>
    )
}