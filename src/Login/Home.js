import React from 'react';
import { useHistory } from 'react-router-dom'


export const Home = () => {
    const [mode, setMode] = React.useState(false);
    const [match, setMatch] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [add, setAdd] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cPassword, setCPassword] = React.useState('');
    const { push } = useHistory();

    const handleSubmit = async () => {
        if (mode) {
            if (password !== cPassword) {
                setMatch(true)
                setTimeout(() => { setMatch(false) }, 1000)
            } else {
                let response = await fetch('http://localhost:3001/signUp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        address: add
                    })
                })
            }
        } else {
            let response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    password: password
                })
            })
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center m-5 pt-3">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <p className="h4 text-center">{(!mode) ? 'Login' : 'SignUp'}</p>
                            </div>
                            <hr />
                            <div className="card-text">
                                <form action="">
                                    <div className="row ml-2 mr-2 mb-3">
                                        <div className="col-sm-12">
                                            <label htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                id='username'
                                                className="form-control"
                                                value={name}
                                                required
                                                onChange={(e) => {
                                                    setName(e.target.value)
                                                }} />
                                        </div>
                                    </div>
                                    {mode ?
                                        <>
                                            <div className="row ml-2 mr-2 mb-3">
                                                <div className="col-sm-12">
                                                    <label htmlFor="email">EmailId</label>
                                                    <input type="email"
                                                        id='email'
                                                        className="form-control"
                                                        value={email}
                                                        required
                                                        onChange={(e) => {
                                                            setEmail(e.target.value)
                                                        }} />
                                                </div>
                                            </div>
                                        </> : null}
                                    <div className="row ml-2 mr-2 mb-3">
                                        <div className="col-sm-12">
                                            <label htmlFor="password">Password</label>
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
                                    {mode ?
                                        <>
                                            <div className="row ml-2 mr-2 mb-3">
                                                <div className="col-sm-12">
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
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
                                            <div className="row ml-2 mr-2 mb-3">
                                                <div className="col-sm-12">
                                                    <label htmlFor="add">Address</label>
                                                    <textarea
                                                        id='add'
                                                        className="form-control"
                                                        value={add}
                                                        required
                                                        onChange={(e) => {
                                                            setAdd(e.target.value)
                                                        }} />
                                                </div>
                                            </div>
                                        </> : null}
                                    {(match && mode) ? <div className="row ml-2 mr-2 mb-3 mt-5">
                                        <div className="col-sm-12">
                                            <p className="text-center text-danger">Passwords didnot match</p>
                                        </div>
                                    </div> : null}
                                    <div className="row ml-2 mr-2 mb-3 mt-5">
                                        <div className="col-sm-12">
                                            <button className="btn btn-outline-danger" type='submit'
                                                onClick={(e) => { handleSubmit(e); }}>
                                                {(!mode) ? 'Login' : 'SignUp'}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        {(!mode) ? <p className='text-primary' onClick={() => push('/forgotpassword')}>Forgot Password ?</p> : null}
                                    </div>
                                    <div className="row justify-content-center mt-3">
                                        <a href="#" onClick={() => setMode(!mode)}>Switch to {(mode) ? 'Login' : 'SignUp'}</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}