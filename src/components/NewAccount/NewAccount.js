import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function NewAccount({ addAccount }) {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let account = { name: name, lastName: lastName, email: email, phone: phone };
        addAccount(account);
        navigate('/');
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <h2 className='mb-5'>Add New Account</h2>
                    <div className='row'>
                        <div className='col-10 offset-1'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicLastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" onChange={(e)=> setLastName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter phone number" onChange={(e)=> setPhone(e.target.value)}/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Add account
                                </Button>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NewAccount
