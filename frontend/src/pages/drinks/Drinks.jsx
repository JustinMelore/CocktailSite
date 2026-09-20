import { useEffect } from "react";
import DrinkCard from "../../components/drinkcard/DrinkCard"
import { useState } from "react";
import { useSearchParams } from "react-router";
import style from "./Drinks.module.css"
import Searchbar from "../../components/searchbar/Searchbar";
import AllDrinksButton from "../../components/viewAllDrinks/AllDrinksButton";
export default function Drinks() {

    const [drinkList, setDrinkList] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        async function getDrinks() {
            const url = import.meta.env.VITE_DEV_URL || "/";
            try {
                const response = await fetch(url + "api/drinks?" + searchParams);
                setDrinkList(await response.json());
            } catch(e) {
                console.error(e);
            }
        }
        getDrinks();
    }, [searchParams]);

    return (
        
        <main className={style.drinkPage}>
            <h1>DRINKS</h1>
            <div className={style.searchbarContainer}>
                <Searchbar initialValue={searchParams.get("search")}/>
            </div>
            <AllDrinksButton/>
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