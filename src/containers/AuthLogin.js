import React, { Component } from 'react'
import { connect } from 'react-redux' 
import Login from '../components/Login'
import { login } from '../actions/AuthLogin'

class AuthLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render() {
        const { isError, errorCode } = this.props
        return (
            <Login onInputChange={this.onInputChange} data={this.state} onSubmit={this.onSubmit} isError={isError} errorCode={errorCode} />
        )
    }
}

const mapStateToProps = state => {
    const isError = state.authLoginReducer.error || false
    const errorCode = state.authLoginReducer.errorCode || null
    return {
        login: state.authLoginReducer,
        isError,
        errorCode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login(credentials) {
            dispatch(login(credentials))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin)