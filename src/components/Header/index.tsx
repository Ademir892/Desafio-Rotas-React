import { NavLink } from "react-router-dom";
import homeImg from "../../assets/home.png";
import "../Header/styles.css";

export default function Header(){
    return (
        <header>
            <nav>
                <div className="navbar">
                    <NavLink to="/home" className={({isActive}) => isActive ? "menu menu-active" : "menu"}> Início </NavLink>
                    <NavLink to="/produtos" className={({isActive}) => isActive ? "menu menu-active" : "menu"}>Produtos</NavLink>
                    <NavLink to="/sobre" className={({isActive}) => isActive ? "menu menu-active" : "menu"}>Sobre nós</NavLink>
                </div> 
                <NavLink to="/home" className="homeImg"><img src={homeImg} alt="Home" /></NavLink>           
            </nav>
        </header>
    );
}