import CartWidget from "../carro/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h1>Semillero Gorrión</h1>
            <div>
                <button>Vegetales</button>
                <button>Hierbas</button>
                <button>Flores</button>
                <button>Tubérculos</button>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;