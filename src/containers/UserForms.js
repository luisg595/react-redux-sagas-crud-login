import React, { Component } from 'react'
import FormsUser from '../components/Users/FormsUser'
import MainTemplate from './MainTemplate'

class UserForms extends Component {
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.props.data)
    }

    onInputChange = (e) => {
        const columName = e.target.name
        const value = e.target.value
        this.props.onInputChangeValue(columName, value)
    }

    render() {
        return (
            <MainTemplate>
                <FormsUser onSubmit={this.onSubmit} onInputChange={this.onInputChange} title={this.props.title} textButton={this.props.textButton} data={this.props.data} />
            </MainTemplate>
        )
    }
}

export default UserForms