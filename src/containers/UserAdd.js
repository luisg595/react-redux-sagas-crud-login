import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserForms from '../containers/UserForms'

class UserAdd extends Component {
    onSubmitCreate = () => {
        
    }

    onInputChange = (e) => {
        const columName = e.target.name
        const value = e.target.value
        this.props.updateColumn({
            columName,
            value
        })
    }

    render() {
        return (
            <UserForms title='Create User' textButton='Create' onSubmit={this.onSubmitCreate} />
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdd)