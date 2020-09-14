import React, { useState,useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from './GlobalState'

export default function AddTransactions() {

    const {addIncome,addExpense} = useContext(GlobalContext)

    //FOR INCOME
    const [income, setIncome] = useState({
        incomeText: "",
        incomeAmount: ''
    })

    const { incomeText, incomeAmount } = income;

    const onChangeIncome = (e) => {
        setIncome({ ...income, [e.target.name]: e.target.value });
    };

    const onSubmitIncome = (e) => {
        e.preventDefault();

        const newIncomeTransaction = {
            id: uuidv4(),
            incomeText,
            incomeAmount: incomeAmount * 1  //"*1" converts incomeAmount string to number
        }
        addIncome(newIncomeTransaction);

        setIncome({
            incomeText:'',
            incomeAmount:0
        })
    }

    //FOR EXPENSE
    const [expense, setExpense] = useState({
        expenseText: "",
        expenseAmount: ''
    })

    const { expenseText, expenseAmount } = expense;

    const onChangeExpense = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const onSubmitExpense = (e) => {
        e.preventDefault();

        const newExpenseTransaction = {
            id: uuidv4(),
            expenseText,
            expenseAmount: expenseAmount * 1  //"*1" converts expenseAmount string to number
        }
        addExpense(newExpenseTransaction);

        setExpense({
            expenseText:'',
            expenseAmount:0
        })
    }

    return (
        <div className='form-wrapper'>
            <form onSubmit={onSubmitIncome}>
                <div className='input-group income'>
                    <input name='incomeText' type='text' placeholder='Add Income Text...' autoComplete='off' onChange={onChangeIncome} value={incomeText} />
                    <input name='incomeAmount' type='number' placeholder='Amount' autoComplete='off' onChange={onChangeIncome} value={incomeAmount}/>
                    <input type='submit' value='Submit' />
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className='input-group expense'>
                    <input name='expenseText' type='text' placeholder='Add Expense Text...' autoComplete='off' onChange={onChangeExpense} value={expenseText} />
                    <input name='expenseAmount' type='number' placeholder='Amount' autoComplete='off' onChange={onChangeExpense} value={expenseAmount} />
                    <input type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}
