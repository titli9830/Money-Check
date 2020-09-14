import React from 'react';
import Header from './Header'
import Balance from './Balance'
import AddTransactions from './AddTransactions'
import IncomeList from './IncomeList'
import ExpenseList from './ExpenseList'
import { GlobalContextProvider } from './GlobalState'
import './App.css';


export default function App() {
    return (
        <GlobalContextProvider>
            <div className='container'>
                <div className='app-wrapper parent'>
                    <div className='app-box1'>
                        <Header />
                        <Balance />
                    </div>
                    <div className='app-box2'>
                        <AddTransactions />
                        <div className='app-box21'>
                            <IncomeList />
                            <ExpenseList />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalContextProvider>
    );
}
