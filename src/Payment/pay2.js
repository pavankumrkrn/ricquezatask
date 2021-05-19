

import React from 'react';
import swal from 'sweetalert';
import { useHistory, useParams } from 'react-router-dom'

export const Pay2 = (props) => {
    const [name, setName] = React.useState('');
    const { push } = useHistory();
    const validate = () => {

        if (name === '') {
            swal('please enter account ID')
        } else {
            push('/finalPay')
        }
    }
    return (
        <div className="card bg-light">
            <div className="card-body">
                <div className="card-title">
                    <p className="text-center h6">{props.title}</p>
                </div>
                <hr />
                <div className="card-text">
                    {(props.title !== '') ? (props.title === 'Cash') ? <>
                        <p className="display-4">Please maintain social distance while delivery</p>
                    </> :
                        <>
                            <div className="row mt-2">
                                <div className="col-sm-12">

                                    <label htmlFor="aName">Price</label>
                                    <input type="text" className="form-control" disabled value='500' />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-12">
                                    <label htmlFor="aName">Account ID</label>
                                    <input type="text" className="form-control" value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }} /></div>
                            </div>
                            <div className="row mt-4 mb-1 justify-content-center">
                                <button className="btn btn-outline-success" onClick={validate}>Pay</button>
                            </div></> : <><p className="display-4">Please select payment mode</p></>}
                </div>
            </div>
        </div>
    )
}