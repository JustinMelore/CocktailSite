import Searchbar from "../../components/searchbar/Searchbar";
import style from "./Home.module.css";
import logo from "../../assets/logo.svg";
export default function Home() {
    return (
        <main className={style.home}>
            <div className={style.dummy}>
                <img src={logo}/>
            </div>

            <h1>Site Name Here</h1>
            <div className={style.searchbarContainer}>
                <Searchbar/>
            </div>
        </main>
    )
}