import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { food_list } from '../../assets/assets'
const Cart = () => {
 const navigate = useNavigate();
  const{cartItems,food_list,removeCart,getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
     {
      food_list.map((item)=>{
         if(cartItems[item._id]>0){
         return(
         <div key={item._id}>
           <div className="cart-items-title cart-items-item">
             <img src={item.image} alt="" />
             <p>{item.name}</p>
             <p>{item.price}</p>
             <p>{cartItems[item._id]}</p>
             <p>${item.price*cartItems[item._id]}</p>
           <p onClick={()=>removeCart(item._id)} className='cross'>X</p>
          </div>
          <hr />
         </div>
         )
         }
      })
     }
      </div>
           <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                 <p>SubTotal</p>
                 <p>${getTotalCartAmount()===0?0:2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                 <p>Delivery Fee</p>
                 <p>{2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                 <b>Total</b>
                 <b>${getTotalCartAmount()+2}</b>
                </div>
                
              </div>
              <button onClick={()=>navigate('/Order')}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promo-code">
              <p> if you have a promo code Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='   promo code' id="" />
                <button>Submit</button>
              </div>
            </div>
           </div>
        </div>
    
  )
}

export default Cart