import React from 'react'
import { Table } from 'react-bootstrap'
import TableComponent from '../Table/Table'

function TableActions ({ accounts, deleteAccount }) {
    let allAccounts = accounts.map((account, index) => (
        <TableComponent
            key={account.id}
            account={account}
            index={index}
            edit={true}
            deleteAccount={deleteAccount}
         />
    ))
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <h2 className='mb-5'>Accounts</h2>
                    
                    {accounts.length < 1 ? (
                        <div>You don't have an account yet</div>
                        ) :
                        (
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allAccounts}
                                </tbody>
                            </Table>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TableActions
