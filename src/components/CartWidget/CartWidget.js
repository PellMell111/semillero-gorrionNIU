import React, { useContext } from 'react';
import './CartWidget.css';
import cart from './assets/cart.svg';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget" style={{ display: totalQuantity() > 0 ? 'block' : 'none' }}>
      <div className="cart-container">
        <img className="cart" src={cart} alt="cart-widget" />
        {totalQuantity() > 0 && <span className="cart-quantity">{totalQuantity()}</span>}
      </div>
    </Link>
  );
};

export default CartWidget;