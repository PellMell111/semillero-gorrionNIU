import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div className="Cart">
        <h2>No hay items en el carrito</h2>
        <Link to="/" className="Button">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="Cart">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className="Cart-total">Total: ${total()}</h3>
      <button onClick={() => clearCart()} className="Button Cart-clear">
        Limpiar carrito
      </button>
      <Link to="/checkout" className="Button Cart-checkout">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;