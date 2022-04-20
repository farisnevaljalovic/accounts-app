import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TableComponent({ account, index, edit, deleteAccount }) {
    const actionBtn = edit ? (
        <>
            <td>
                <Link
                    type="button"
                    className="btn btn-warning"
                    to={`/actions/${account.id}`}
                >
                    Edit
                </Link>
            </td>
            <td>
                <Button variant="danger" onClick={()=> deleteAccount(account.id)}>Delete</Button>
            </td>
        </>
    ): (null);

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{account.name}</td>
            <td>{account.lastName}</td>
            <td>{account.email}</td>
            <td>{account.phone}</td>
            {actionBtn}
        </tr>
    )
}

export default TableComponent
