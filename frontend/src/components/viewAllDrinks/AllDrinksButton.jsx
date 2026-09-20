import { Link } from "react-router";
import style from "./AllDrinksButton.module.css";
export default function AllDrinksButton() {
    return (
        <Link className={style.allDrinksButton} to="/drinks">View All Drinks</Link>
    );
}