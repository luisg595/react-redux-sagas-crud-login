import React, { Component } from 'react'
import DashboardComponent from '../components/Dashboard'
import MainTemplate from '../containers/MainTemplate'

class Dashboard extends Component {
    render() {
        return (
            <MainTemplate>
                <DashboardComponent />
            </MainTemplate>
        )
    }
}

export default Dashboard