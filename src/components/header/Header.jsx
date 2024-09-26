import css from './Header.module.css'
import { Link } from "react-router-dom";
import logo from '../../assets/TravelTrucks.svg'
 
function Header() {

    return (
        <header className={css.header}>
            <Link className={css.logo} to="/"><img src={logo} width='135' height='15'/></Link>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
        </header>
    )
}

export default Header