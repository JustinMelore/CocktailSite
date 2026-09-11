import style from "./Searchbar.module.css";

export default function Searchbar() {
    return (
        <form className={style.searchbar} action="/drinks">
            <input type="text" name="search" placeholder="Search"/>
            <input type="submit" value=""/>
        </form>
    );
}