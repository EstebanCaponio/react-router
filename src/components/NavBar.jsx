import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <ul>
                <li><NavLink to='/'>HOME PAGE</NavLink></li>
                <li><NavLink to='/chi-siamo'>CHI SIAMO</NavLink></li>
                <li><NavLink to='/lista-dei-post'>LISTA PRODOTTI</NavLink></li>
            </ul>
        </>
    )
}