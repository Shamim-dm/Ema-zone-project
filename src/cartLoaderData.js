import { getShoppingCart } from "./utilities/fakedb";

const cartLoaderData = async () => {
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();
 
// const storeCart = getShoppingCart()
// saveCart = [];

//  for ( const id in storeCart ){
//     const addProduct = products.find(pd => pd.id === id);
//     if(addProduct){
//         const quantity = storeCart[id];
//         addProduct.quantity = quantity;
//         saveCart.push(addProduct)
//     }
    
//  }


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







    return saveCart ;
}
export default cartLoaderData;