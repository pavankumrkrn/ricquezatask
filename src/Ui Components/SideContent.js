import React from 'react';
import { useHistory } from 'react-router-dom'
export const SideContent = (props) => {
    const { push } = useHistory();
    return (
        <div className="card sidebarCard shd mt-2 pt-5">
            <div className="card-body">
                {(!props.cart.length) ?
                    <div className="p-3">
                        <p className="display-4 text-secondary">
                            <b>Uh-oh Your cart is Empty Please add items</b>
                        </p>
                    </div> : null}
                <div className="card noBo shd bg-light">
                    <div className="card-body">
                        <div className="card-title"><p className="h5 text-center">Cart</p></div>
                        <hr />
                        <div className="card-text">
                            {props.cart.map((i, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <div className="col">
                                            <p className="text-left">{i.name}</p>
                                        </div>
                                        <div className="col-1">
                                            <p>:</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="text-left">{'Rs. ' + (+i.price + 100) + ' (with gst and toppings)'}</p>
                                        </div>
                                        <div className="col">
                                            <p className='remove' onClick={() => {
                                                props.removeItem(index)
                                            }}>X</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <div className="card-text">
                            <div className="col-sm-12 text-center">
                                <button className="btn btn-success" onClick={() => {
                                    let total = props.cart.reduce((a, b) => a + 100 + b.price, 0)
                                    push('/payment/' + total)
                                }}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}