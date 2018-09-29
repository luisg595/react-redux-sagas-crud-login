import React from 'react'
import { Alert } from 'reactstrap'
import { LogIn } from 'react-feather'
import './index.css'

const Login = ({ onInputChange, data, onSubmit, isError, errorCode }) => {
    let controlMessageError = null
    if (isError === true && errorCode === 401) {
        controlMessageError = (
            <Alert color="danger">Invalid credentials</Alert>
        )
    }
    else if(isError === true) {
        controlMessageError = (
            <Alert color="danger">Error in Authentication</Alert>
        )
    }
    return (
        <div className="text-center">
            {controlMessageError}
            <form className="form-signin" onSubmit={onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" name="username" onChange={onInputChange} value={data.email} placeholder="Email address" required autoFocus />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" name="password" onChange={onInputChange} value={data.password} placeholder="Password" required />
                <button className="btn btn-lg btn-outline-primary btn-block" type="submit">Sign in <LogIn /></button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
            </form>
        </div>
    )
}

export default Login