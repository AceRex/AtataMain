import React, { useState, useEffect } from 'react';
import './cart.css'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import NumberFormat from "react-number-format";
import { connect, useSelector} from 'react-redux'
import { removeFromCart } from '../../Redux/ShoppingCart/Shopping_Actions';


function CartCard({itemData, removeFromCart}) {
    
    const activeCurrency = useSelector((activeCurrency) => activeCurrency);
    const value = activeCurrency.currencyReducer.defaultValue;

    const [image, setImage] = useState(itemData.img)
    const [id, setId] = useState(itemData.id)
    const [title, setTtile] = useState(itemData.title)
    const [qty, setQty] = useState(itemData.qty)
    const [total, setTotal] = useState(0)
    const [price, setPrice] = useState(itemData.price)

    // const dispatch = useDispatch()
    
    useEffect(() => {
        setTotal(price * qty)
      }, null);



    return (
        <>
            <div className='cart-item'> 
                <div className="cart-img-container">
                    <img src={image} alt={title} />
                </div>
                <div className="cart-item-details">
                    <p>{title}</p>
                    <span>Unit Price: {' '}
                        <NumberFormat
                            className={"px-1"}
                            value={price * value.currencyRate}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={value.currencySymbol}
                        />
                        {` x ${qty} `}
                    </span>
                    <h6>Seller: My Ankara Store</h6>

                </div>
                <div className="cart-item-qty">
                    <NumberFormat
                        className={"px"}
                        value={total * value.currencyRate}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={value.currencySymbol}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(itemData.id) }
                    className="btn-dlt">
                    <RiDeleteBin6Fill />
                </button>

            </div>
        </>
    );
}

function mapStateToProps(state) {
    return { activeCurrency: state.activeCurrency };
}
const mapDispatchToProps = dispatch => {
    return{
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartCard);