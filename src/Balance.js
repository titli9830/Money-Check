import React, { useContext } from 'react'
import { GlobalContext } from './GlobalState'

export default function Balance() {

    const { incomeTransactions, expenseTransactions } = useContext(GlobalContext)

    const incomeAmounts = incomeTransactions.map(
        incomeTransaction => incomeTransaction.incomeAmount
    )

    const expenseAmounts = expenseTransactions.map(
        expenseTransaction => expenseTransaction.expenseAmount
    )

    const totalIncome = incomeAmounts.reduce((currentSum, item) => (currentSum += item), 0).toFixed(2)
    const totalExpense = expenseAmounts.reduce((currentSum, item) => (currentSum += item), 0).toFixed(2)
    return (
        <div className='balance'>
            <h2>Your Balance</h2>
            <h3>${(totalIncome-totalExpense).toFixed(2)}</h3>
            <div className='income-expense'>
                <div className='plus'>
                    <h3>Incomes</h3>
                    <p>+${totalIncome}</p>
                </div>
                <div className='minus'>
                    <h3>Expenses</h3>
                    <p>-${totalExpense}</p>
                </div>
            </div>
        </div>
    )
}