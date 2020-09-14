import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

export default function IncomeTransaction({ incomeTransaction }) {

    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className='transaction'>
            <div className='abcd'>
                <span className='transaction-text'>{incomeTransaction.incomeText}</span>
                <span className='transaction-amount'>${incomeTransaction.incomeAmount}</span>
            </div>
            <button className='delete-btn' onClick={() => deleteTransaction(incomeTransaction.id)}>
                <i className='fas fa-trash'></i>
            </button>
        </li>
    )
}
