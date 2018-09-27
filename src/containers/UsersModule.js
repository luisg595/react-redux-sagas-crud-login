import React, { Component } from 'react'
import ListUsers from '../components/Users/ListUsers'
import MainTemplate from '../containers/MainTemplate'

class UsersModule extends Component {
    render() {
        return (
            <MainTemplate>
                <ListUsers />
            </MainTemplate>
        )
    }
}

export default UsersModule