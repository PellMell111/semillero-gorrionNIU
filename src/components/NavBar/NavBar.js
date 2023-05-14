import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
            <h1>Semillero Gorrión</h1>
            </Link>
            <div>
                <NavLink to={`/category/vegetales`} className={({ isActive })=> isActive ? 'ActiveOption' : 'Option'}>Vegetales</NavLink>
                <NavLink to={`/category/hierbas`} className={({ isActive })=> isActive ? 'ActiveOption' : 'Option'}>Hierbas</NavLink>
                <NavLink to={`/category/flores`} className={({ isActive })=> isActive ? 'ActiveOption' : 'Option'}>Flores</NavLink>
                <NavLink to={`/category/tuberculos`} className={({ isActive })=> isActive ? 'ActiveOption' : 'Option'}>Tubérculos</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;