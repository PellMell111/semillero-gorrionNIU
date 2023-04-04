import shoppingCart from './assets/shoppingCart.svg'

const CartWidget = () => {
    const tamanoimg = {
        width: '20px',
        height: '20px'
    };
    return (
        <div>
            <img style={tamanoimg} src={shoppingCart} alt="Carrito de compras"/>
            7
        </div>
    )
};

export default CartWidget;