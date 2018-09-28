import React from 'react'
import { Edit, Trash, UserPlus } from 'react-feather'
import { Button } from 'reactstrap'
import './ListUsers.css'

const ListUsers = ({ users }) => {
    return (
        <main role="main">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Users</h1><Button color="success" outline title="Add new user">Add <UserPlus /></Button>
            </div>
            <h2>List</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.results.data.map(user => 
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button color="warning" outline size="sm" title="Edit">
                                        <Edit />
                                    </Button>&nbsp;&nbsp;&nbsp;
                                    <Button color="danger" outline size="sm" title="Remove">
                                        <Trash />
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListUsers