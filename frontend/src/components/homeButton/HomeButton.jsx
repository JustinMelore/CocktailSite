import { Link } from "react-router";
import style from "./HomeButton.module.css";
export default function HomeButton() {
    return (
            <Link className={style.homeButton} to="/drinks">
            <div>
                <img src="/logo.svg" alt="Home Button"/>
            </div>
        </Link>
    );
}