import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainTemplateComponent from '../components/Template/MainTemplate'
import { logout } from '../actions/AuthLogin'

class MainTemplate extends Component {
    onClick = () => {
        this.props.logout()
    }

    render() {
        return (
            <MainTemplateComponent onClick={this.onClick}>
                {this.props.children}
            </MainTemplateComponent>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout() {
            dispatch(logout())
        }
    }
}

export default connect(null, mapDispatchToProps)(MainTemplate)