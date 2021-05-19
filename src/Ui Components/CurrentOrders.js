import React from 'react'

export const CurrentOrders = () => {
    const [input, showInput] = React.useState(false)

    const change = () => {
        showInput(!input)
    }
    return (
        <div className="card bg-light sticky-top orders float-right position-absolute position-fixed">
            <div className="card-body">
                <div className="card-title">
                    <p className="h5 text-center" onClick={change}>Current Orders</p>
                </div>
                <hr />
                <div className="card-text">
                    <div className="row">
                        <div className="col-sm-12">
                            {(!input) ? <>
                                <table className="table table-striped">
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>Order</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr></tr>
                                    </tbody>
                                </table>
                            </> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}