import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListUsers from '../components/Users/ListUsers'
import MainTemplate from './MainTemplate'
import { loadUsers, addUser } from '../actions/Users'

class UsersList extends Component {
    componentDidMount() {
        this.props.loadUsers()
    }

    render() {
        return (
            <MainTemplate>
                <ListUsers users={this.props.users} />
            </MainTemplate>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers() {
            dispatch(loadUsers())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)