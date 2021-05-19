import React from 'react'
import swal from 'sweetalert'
export const RazorPay = (props) => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <div className="card noBo">
                        <div className="card-body">
                            <div className="card-title">
                                <div className="row">
                                    <div className="col-sm-4">
                                        RBL Bank
                            </div>
                                </div>
                            </div>
                            <hr />
                            <div className="card-text pl-3">
                                <div className="row">
                                    <div className="col">
                                        <p className="text-left">Merchant</p>
                                    </div>
                                    <div className="col-1">:</div>
                                    <div className="col">
                                        <p className="text-left">PAYTM</p></div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-left">Transaction Amount</p>
                                    </div>
                                    <div className="col-1">:</div>
                                    <div className="col">
                                        <p className="text-left">500</p></div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-left">Account Id</p>
                                    </div>
                                    <div className="col-1">:</div>
                                    <div className="col">
                                        <p className="text-left">PAYTM</p></div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="text-primary text-left"><b>Authenticate Payment</b></p>
                                    <p className="text-left">OTP sent to ****@gmail.com</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 text-left">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="otp">Enter One Time Password (OTP)</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control noBo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-left mt-auto">
                                    <button className="btn btn-warning btn-block noBo pr-5 pl-5" onClick={() => {
                                        swal('Payment made successfully')
                                    }}>Make Payment</button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4">
                                    <p className="text-primary text-left">Resend OTP</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row justify-content-center mt-5">
                                <div className="col-sm-12">
                                    <p className="text-primary text-left">Click Here to abort transaction and go Back to merchant site</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}