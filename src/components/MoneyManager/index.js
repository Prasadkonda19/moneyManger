import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    activeId: transactionTypeOptions[0].optionId,
    titleInput: '',
    amountInput: '',
    transactionList: [],
  }

  onDelete = id => {
    const {transactionList} = this.state

    const updateList = transactionList.filter(each => id !== each.id)

    this.setState({transactionList: updateList})
  }

  amountClick = event => {
    this.setState({amountInput: event.target.value})
  }

  titleClick = event => {
    this.setState({titleInput: event.target.value})
  }

  typeClick = event => {
    this.setState({activeId: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, activeId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === activeId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prev => ({
      transactionList: [...prev.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      activeId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenseAmount = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenseAmount += each.amount
      }
    })
    return expenseAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    let expenseAmount = 0
    let balanceAmount = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      } else {
        expenseAmount += each.amount
      }
    })
    balanceAmount = incomeAmount - expenseAmount
    return balanceAmount
  }

  render() {
    const {transactionList, titleInput, amountInput, activeId} = this.state
    const expensiveAmount = this.getExpenses()
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    return (
      <div>
        <div className="namecard">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensiveAmount={expensiveAmount}
        />
        <div>
          <form>
            <h1>Add Transaction</h1>
            <label htmlFor="Title">TITLE</label>
            <input
              id="Title"
              type="text"
              onChange={this.titleClick}
              placeholder="TITLE"
              value={titleInput}
            />
            <label htmlFor="Amount">AMOUNT</label>
            <input
              id="Amount"
              type="text"
              onChange={this.amountClick}
              placeholder="AMOUNT"
              value={amountInput}
            />
            <label htmlFor="Expense">TYPE</label>
            <select id="Expense" onChange={this.typeClick} value={activeId}>
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="button" onClick={this.addTransaction}>
              Add
            </button>
          </form>
          <div>
            <h1>History</h1>
            <div>
              <ul>
                <li>
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </li>
                {transactionList.map(each => (
                  <TransactionItem
                    key={each.id}
                    details={each}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
