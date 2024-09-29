import css from './Header.module.css'
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/TravelTrucks.svg'
 
function Header() {

    return (
        <header className={css.header}>
            <Link className={css.logo} to="/"><img src={logo} width='135' height='15'/></Link>
            <NavLink className={({ isActive }) => isActive ? css.active : undefined} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? css.active : undefined} to="/catalog">Catalog</NavLink>
        </header>
    )
}

export default Header