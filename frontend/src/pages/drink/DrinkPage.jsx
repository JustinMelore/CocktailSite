import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "./DrinkPage.module.css";
import DrinkBody from "../../components/drinkBody/DrinkBody";
export default function DrinkPage() {
    
    const {drinkName} = useParams();
    const [drinkObject, setDrinkObject] = useState(null);

    useEffect(() => {    
        async function getDrink() {
            const url = import.meta.env.VITE_DEV_URL || "/";
            try {
                const response = await fetch(url + "api/drinks/" + drinkName);
                if(response.ok) {
                    setDrinkObject(await response.json());
                }
            } catch(e) {
                console.error(e);
            }
        }
        getDrink();
    }, []);

    return (
        <main className={style.drinkPage}>
            {
                drinkObject ? <DrinkBody drinkObject={drinkObject}/> : <h1>Could not find drink with name "{drinkName}"</h1>
            }
        </main>
    );
}