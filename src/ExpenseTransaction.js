import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

export default function ExpenseTransaction({ expenseTransaction }) {

    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className='transaction'>
            <div className='efgh'>
                <span className='transaction-text'>{expenseTransaction.expenseText}</span>
                <span className='transaction-amount'>${expenseTransaction.expenseAmount}</span>
            </div>
            <button className='delete-btn' onClick={() => deleteTransaction(expenseTransaction.id)}>
                <i className='fas fa-trash'></i>
            </button>
        </li>
    )
}