import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAsync} from './productsSlice';
import { addAsync } from '../cart/cartSlice';
import  './Products.css';
import { useEffect } from 'react';

export function Products() {
 
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.product.products)
  useEffect(()=>{
    dispatch(fetchAsync());
},[])

  return (
    <div>
      <div className="row">
        
        
       
      </div>  
      {products.map((product)=> (
                 <div className="card">
                 <img src={product.thumbnail} alt={product.title} width="70%" />
                 <h1>{product.title}</h1>
                 <p className="price">${product.price}</p>
                 <p>{product.description}</p>
                 <p><button onClick={()=> dispatch(addAsync(product))}>Add to Cart</button></p>
               </div> 
      ))}
     
    </div>
  );
}
