import React from 'react'
export const ChangePassword = () => {
    const [password, setPassword] = React.useState('');
    const [cPassword, setCPassword] = React.useState('');
    const [match, setMatch] = React.useState(false);
    const handleSubmit = async () => { }

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <p className="h4 text-center">Change Password</p>
                </div>
                <hr />
                <div className="card-text">
                    <form action="">
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="password">New Password</label>
                                <input type="password"
                                    id='password'
                                    className="form-control"
                                    value={password}
                                    required
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="confirmPassword">Confirm New Password</label>
                                <input type="password"
                                    id='confirmPassword'
                                    className="form-control"
                                    value={cPassword}
                                    required
                                    onChange={(e) => {
                                        setCPassword(e.target.value)
                                    }} />
                            </div>
                        </div>
                        {(match) ? <div className="row ml-2 mr-2 mb-3 mt-5">
                            <div className="col-sm-12">
                                <p className="text-center text-danger">Passwords didnot match</p>
                            </div>
                        </div> : null}
                        <div className="row mb-3 mt-5">
                            <div className="col-sm-12 text-center">
                                <button className="btn btn-success"
                                    type='submit'
                                    onClick={(e) => { handleSubmit(e); }}>Change password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}