import React, { useState } from 'react';
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import AccountsTable from './components/AccountsTable/AccountsTable';
import NewAccount from './components/NewAccount/NewAccount';
import Edit from './components/Edit/Edit';
import TableActions from './components/TableActions/TableActions';

function App() {
    const [accounts, setAccounts] = useState([]);

    const addAccount = (acc) => {
        acc.id = Date.now();
        setAccounts([...accounts, acc]); 
    }
    const editAccount = (acc) => {
        let accountPossition = accounts.map(account => account.id).indexOf(acc.id);
        accounts[accountPossition] = acc;
    }
    const deleteAccount = (id) => {
        let filterAccount = accounts.filter(acc => acc.id !== id);
        setAccounts(filterAccount);
    }
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<AccountsTable accounts={accounts} />} />
                <Route path='/new' element={<NewAccount addAccount={addAccount} />} />
                <Route path='/actions' element={<TableActions accounts={accounts} deleteAccount={deleteAccount}/>} />
                <Route path="/actions/:id" element={<Edit accounts={accounts} editAccount={editAccount} />}
      />
            </Routes>
        </BrowserRouter>
    )
}

export default App
