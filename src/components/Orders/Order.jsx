import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from "../../utilities/fakedb";
import './Order.css'

const Order = () => {
    const savecart = useLoaderData()
    const [cart, setCart]= useState(savecart)

    const handleRemoveCart = (id)=>{
      const removeCart = cart.filter(product => product.id !== id)
      setCart(removeCart)
      removeFromDb(id)

    }

    // console.log(products)
    return (
        <div className='shops-section'>
            <div className='order-products'>
              {
                cart.map(carts => <ReviewItem carts={carts} key={carts.id} handleRemoveCart={handleRemoveCart}></ReviewItem>)
              }
            </div >
                
            <div className='cart-section'>
                
            <Cart cart={savecart}></Cart>

            </div>
        </div>
    );
};

export default Order;