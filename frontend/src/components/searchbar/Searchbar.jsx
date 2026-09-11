import style from "./Searchbar.module.css";

export default function Searchbar({initialValue}) {
    return (
        <form className={style.searchbar} action="/drinks">
            <input type="text" name="search" placeholder="Search" defaultValue={initialValue}/>
            <input type="submit" value=""/>
        </form>
    );
}