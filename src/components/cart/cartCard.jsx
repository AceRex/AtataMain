import React,{useState} from 'react';
import './cart.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import Data from '../../data.json'


export default function CartCard(props) {
   const [deleteItem, setDeleteItem] = useState(true);
   var cartItems = Data.Cart

  function handleDelete () {
      setDeleteItem(false)
      cartItems = cartItems - 1
  }
    return (
        <>
            <div className={`${!deleteItem ? 'hidden' : 'cart-item'}`}>
                <div className="cart-img-container">
                    <img src={props.Img} alt='Cartimage' />
                </div>
                <div className="cart-item-details">
                    <p>Ankara Sneaker</p>
                    <span>Unit Price: #5000</span>
                    <h6>Seller: My Ankara Store</h6>

                </div>
                <div className="cart-item-qty">
                    <p>#15,000</p>
                    <span> x3</span>
                </div>
                <button onClick={handleDelete} className="btn-dlt"><RiDeleteBin6Fill /></button>

            </div>
        </>
    );
}
