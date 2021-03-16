import React, {useState, useEffect} from 'react'
import './mainCheckout.css'
import NumberFormat from "react-number-format";
import { connect, useSelector } from 'react-redux'



function ItemInCart({itemData, currency}) {

    const activeCurrency = useSelector((activeCurrency) => activeCurrency);
    const value = activeCurrency.currencyReducer.defaultValue;

    const [title, setTtile] = useState(itemData.title)
    const [qty, setQty] = useState(itemData.qty)
    const [total, setTotal] = useState(0)
    const [price, setPrice] = useState(itemData.price)

    useEffect(() => {
        setTotal(price * qty)
      }, null);



    return (
        <div className='item-in-cart'>
            <div className="items-in-cart-details">
                <p>{title}</p>
                <span>Unit Price
                    <NumberFormat
                        className={"px-1"}
                        value={price * value.currencyRate}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={value.currencySymbol}
                    />
                    {` x ${qty}`}
                </span>
            </div>
            <div className="items-in-cart-amount">
                <NumberFormat
                    className={"px-1"}
                    value={total * value.currencyRate}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={value.currencySymbol}
                />
            </div>
        </div>
    )
}

function Summary(props) {

    const activeCurrency = useSelector((activeCurrency) => activeCurrency);
    const value = activeCurrency.currencyReducer.defaultValue;
    const [cartItem, setCartItem] = useState(props.cart)
    const [currency, setCurrency] = useState(value)
    const [subTotal, setSubTotal] = useState(0)
    const [VAT, setVAT] = useState(7.5)
    const [VATvalue, setVATValue] = useState(0)
    const [deliveryPrice, setDeliveryPrice] = useState(10)

    useEffect(() => {
        let price = 0;

        cartItem.forEach(item => {
            price += item.qty * item.price;
        })
        setVATValue(subTotal * VAT / 100)
        setSubTotal(price)
        setVAT(7.5)

      }, [cartItem, subTotal,VAT]);



    return (
        <div className='summary-container'>
            <div className='item-summary'>
                {cartItem.map((item) => (
                    <ItemInCart itemData={item} currency={currency} />
                ))
                }
            </div>
            <div className='total-container'>
                <div className='ttl'>
                    <p>Subtotal</p>
                    <p>
                        <NumberFormat
                            className={"px-1"}
                            value={subTotal * value.currencyRate}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={value.currencySymbol}
                        />
                    </p>

                </div>
                <div className='ttl'>
                    <p>VAT({VAT}%)</p>
                    <p>
                        <NumberFormat
                            className={"px-1"}
                            value={VATvalue}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={value.currencySymbol}

                        />
                    </p>

                </div>
                <div className='ttl'>
                    <p>Delivery Price</p>
                    <p>
                        <NumberFormat
                            className={"px-1"}
                            value={deliveryPrice * value.currencyRate}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={value.currencySymbol}

                        />
                    </p>

                </div>

            </div>
            <div className="total-amount">
                <div className='ttl'>
                    <p>Total</p>
                    <p>
                        <NumberFormat
                            className={"px-1"}
                            value={subTotal + VATvalue + deliveryPrice * value.currencyRate}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={value.currencySymbol}

                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        activeCurrency: state.activeCurrency
    }
}

export default connect(mapStateToProps)(Summary);