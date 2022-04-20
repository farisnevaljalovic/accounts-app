import React from 'react';
import { Table } from 'react-bootstrap';
import TableComponent from "../Table/Table";

function AccountsTable({ accounts }) {
    let allAccounts = accounts.map((account, index) => (
        <TableComponent account={account} index={index} key={index} />
    ))
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 offset-1'>
                    <h2 className='mb-5'>Accounts</h2>
                    
                    {accounts.length < 1? (
                        <div>You don't have an account yet</div>
                    ):
                    (
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
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

export default AccountsTable
