import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserForms from '../containers/UserForms'
import { updateColumn, createUser } from '../actions/Users'

class UserAdd extends Component {
    onSubmitCreate = dataForm => {
        this.props.createUser(dataForm)
    }

    onInputChangeValue = (columName, value) => {
        this.props.updateColumn({
            columName,
            value
        })
    }

    render() {
        return (
            <UserForms title='Create User' textButton='Create' onSubmit={this.onSubmitCreate} onInputChangeValue={this.onInputChangeValue} data={this.props.data} />
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.usersReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateColumn(dataInput) {
            dispatch(updateColumn(dataInput))
        },
        createUser(dataForm) {
            dispatch(createUser(dataForm))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd)