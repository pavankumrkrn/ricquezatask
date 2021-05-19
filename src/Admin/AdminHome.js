import React from 'react'
export const AdminHome = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="card shd mt-5 mb-5">
                    <div className="card-body">
                        <div className="card-title">
                            <p className="h3 text-center">Orders</p>
                        </div>
                        <hr />
                        <div className="card-text mt-3">
                            <table className="table table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center">Order Number</th>
                                        <th className="text-center">Order Price</th>
                                        <th className="text-center">Customer Name</th>
                                        <th className="text-center">Customer Email</th>
                                        <th className="text-center">Order status</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card shd mt-5 mb-5">
                    <div className="card-body">
                        <div className="card-title">
                            <p className="h3 text-center">Available stock</p>
                        </div>
                        <hr />
                        <div className="card-text mt-3">
                            <table className="table table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center">Item Name</th>
                                        <th className="text-center">Quantity Available</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}