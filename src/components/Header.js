import React, { useState } from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import Order from './Order';

const showOders = (props) => {
  let total = 0
  props.orders.forEach(el => {
    total += Number.parseFloat(el.price)
  });
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='total'>Total price: {new Intl.NumberFormat().format(total)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>There are no goods</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>Towel rails</span>
        <ul className='nav'>
          <li>About</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaBasketShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
