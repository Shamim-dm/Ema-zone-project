import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then( res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart =(product)=>{

        let newCart = []

        const exists = cart.find(pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [... cart, product ]
        }
        else{
            exists.quantity = exists.quantity +1;
            const remaning = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaning, exists]
        }


     
       setCart(newCart)
       addToDb(product.id)
    }

   useEffect( ()=>{
    const storeCart = getShoppingCart()
    const saveCart = [];
    //  step 1: get id
    for (const id in storeCart){
        // step2: get the product by id
        const addedProduct = products.find(product => product.id === id);
      
    // step 3: get gunatity og product
    if(addedProduct){
        const quantity = storeCart[id];
        addedProduct.quantity = quantity
        saveCart.push(addedProduct)
    // console.log(addedProduct)
    }
    }
    setCart(saveCart)
   }, [products])

    return (
        <div className='shop-section'>
            <div className='cart-products'>
                {
                    products.map(product => <Product product={product} 
                        key={product.id}
                        handleAddToCart = {handleAddToCart}
                        ></Product> )
                }
            </div >
                
            <div className='cart-section'>
                
            <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;