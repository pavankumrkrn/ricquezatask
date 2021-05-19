import React from 'react'

export const AAccount = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="card shd">
                <div className="card-body">
                    <div className="card-title">
                        <p className="h3 text-center">Account Details</p>
                    </div>
                    <hr />
                    <div className="card-text mt-5">
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="h4 text-center">Name :</p>
                            </div>
                            <div className="col-sm-4">
                                <p className="h4 text-left">Pavan</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-4">
                                <p className="h4 text-center">Email :</p>
                            </div>
                            <div className="col-sm-4">
                                <p className="h4 text-left">Pavan</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-4">
                                <p className="h4 text-center">Address :</p>
                            </div>
                            <div className="col-sm-8">
                                <p className="h4 text-left">Pavan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}