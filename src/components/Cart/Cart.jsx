import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
console.log(cart)
   let total = 0;
   let totalShipping = 0;
   for (const product of cart){
    total = total + product.price;
    totalShipping = totalShipping + product.shipping
   }
   const tax= total *7/100;
   const grandtotal = total + totalShipping + tax;


    return (
        <div className='cart-total'>
            <h2>Order Summary </h2>
                <p>select Items: {cart.length}  </p>
                <p>Total price: $ {total}</p>
                <p>Total Shipping Charge: $ {totalShipping} </p>
                <p>Tax: $ {tax.toFixed(2)} </p>
                <hr></hr>
                <h4>Grand Total: $ {grandtotal.toFixed(2)} </h4>

        </div>
    );
};

export default Cart;