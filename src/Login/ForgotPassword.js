import React from 'react'
import { useHistory } from 'react-router-dom'


export const ForgotPassword = (props) => {
    const [email, setEmail] = React.useState('');
    const [otp, setOTP] = React.useState('');
    const handleSubmit = async () => { }
    const { push } = useHistory();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center m-5 pt-3">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card shd">
                        <div className="card-body">
                            <div className="card-title">
                                <p className="h4 text-center">Password Recovery</p>
                            </div>
                            <hr />
                            <div className="card-text">
                                <form action="">
                                    <div className="row mr-2 ml-2 mb-5">
                                        <div className="col-sm-12">
                                            <label htmlFor="email">Your Email</label>
                                            <input type="email"
                                                id='email'
                                                className="form-control"
                                                required
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mr-2 ml-2 mb-5">
                                        <div className="col-sm-12">
                                            <p className="text-center">A link will be sent to your email with an OTP</p>
                                        </div>
                                    </div>
                                    <div className="row mr-2 ml-2 mb-5">
                                        <div className="col-sm-12 text-center">
                                            <label htmlFor="otp">OTP</label>
                                            <input type="number"
                                                id='otp'
                                                className="form-control"
                                                required
                                                value={otp}
                                                onChange={(e) => {
                                                    setOTP(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mr-2 ml-2 mb-5">
                                        <div className="col-sm-12">
                                            <button className="btn btn-outline-danger"
                                                type='submit'
                                                onClick={(e) => { handleSubmit(e); }}>Validate</button>
                                        </div>
                                    </div>
                                    <div className="row mr-2 ml-2 mb-5">
                                        <div className="col-sm-12">
                                            <p className='text-primary' onClick={() => push('/home')}>Back to Log-In</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}