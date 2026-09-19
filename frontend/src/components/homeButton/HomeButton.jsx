import { Link } from "react-router";
import style from "./HomeButton.module.css";
export default function HomeButton() {
    return (
        <nav className={style.navbar}>
            <Link to="/drinks">Home</Link>
        </nav>

    );
}