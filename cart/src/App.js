import React, { useState, useEffect } from 'react';
import { Products } from './features/products/Products';
import {Cart } from './features/cart/Cart';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsync } from './features/cart/cartSlice';

function App() {  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAsync());
},[])
  const [showCart, setShowCart] = useState(false);

  const items = useSelector((state)=> state.cart.items);


  return (
    <div className="App">
     
      <button onClick={()=>setShowCart(!showCart)}>Cart [{items.length}]</button>
        {showCart ? <Cart/> : <Products/>}
      b 
    </div>
  );
}

export default App;
