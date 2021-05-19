
import React from 'react'
import { Footer } from '../Ui Components/Footer'
import { Pay } from './pay';
import { useHistory, useParams } from 'react-router-dom'
export const Payment = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-2 mb-2">
                        <div className="card bg-light p-5">
                            <div className="card-body">
                                <div className="card-text">
                                    <div className="card bg-light shd noBo">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-4 text-left">
                                                    <button className="btn btn-dark noBo">Account</button>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-sm-4 text-left">
                                                    <p className="text-left">Name : Pavan</p>
                                                    <p className="text-left">Email : muntha.pavan@gmail.com</p>
                                                    <p className="text-left">Phone : XXXXXX</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-light shd noBo mt-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-4 text-left">
                                                    <button className="btn btn-dark noBo">Address</button>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-sm-4 text-left">
                                                    <div className="card bg-light noBo shd">
                                                        <div className="card-body">
                                                            <p className="text-left">
                                                                Address :
                                                            </p>
                                                            <textarea name="" className='form-control' cols="30" rows="10" placeholder='please enter address'></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-light shd noBo mt-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-4 text-left">
                                                    <button className="btn btn-dark noBo">Payment</button>
                                                </div>
                                            </div>
                                            <div className="row justify-content-center mt-3">
                                                <div className="col-sm-8 text-left">
                                                    <div className="card bg-light noBo shd">
                                                        <div className="card-body">
                                                            <Pay />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
                        {/* <SideContent /> */}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}