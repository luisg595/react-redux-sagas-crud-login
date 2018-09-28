import React, { Component } from 'react'
import FormsUser from '../components/Users/FormsUser'
import MainTemplate from './MainTemplate'

class UserForms extends Component {
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit()
    }
    render() {
        return (
            <MainTemplate>
                <FormsUser {...this.props} onSubmit={this.onSubmit} />
            </MainTemplate>
        )
    }
}

export default UserForms