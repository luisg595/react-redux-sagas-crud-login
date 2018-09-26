import React, { Component } from 'react'
import MainTemplateComponent from '../components/Template/MainTemplate'

class MainTemplate extends Component {
    render() {
        return (
            <MainTemplateComponent {...this.props} />
        )
    }
}

export default MainTemplate