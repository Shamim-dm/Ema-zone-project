import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItems.css'



const ReviewItem = ({ carts, handleRemoveCart }) => {
    const {id, img, price, quantity, name } = carts
    return (
        <div className='items-cart' >
            <img className='img-cart' src={img} />
            <div className='cart-sectionss'>
                
                    <h4 className='product-titles'>{name}</h4>
                    <p>Price: {price}</p>
                    <p>Order quantity: {quantity}</p>
            </div>
               
            <button onClick={()=> handleRemoveCart(id)} className='delete-btn'> <FontAwesomeIcon  icon={faTrashAlt } /></button>
                      
                    
               
        
        </div>
    );
};

export default ReviewItem;