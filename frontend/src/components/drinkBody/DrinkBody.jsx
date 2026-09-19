import { useEffect, useState } from "react";
import style from "./DrinkBody.module.css";
import logo from "../../../public/logo.svg";

export default function DrinkBody({drinkObject}) {
    
    const [imgSrc, setImgSrc] = useState(logo);
    
    const drinkName = drinkObject ? drinkObject.name : "Drink";
    

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
    }, [drinkObject])

    return(
        <article className={style.drinkBody}>
            <div className={style.upperContainer}>
                <section className={style.dummy}>
                    <img alt={drinkName + " Image"} src={imgSrc}/>
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