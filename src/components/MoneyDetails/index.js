// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensiveAmount} = props

  return (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="balance"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expensiveAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
