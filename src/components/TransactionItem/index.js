// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, onDelete} = props
  const {id, title, amount, type} = details

  const deleteBtn = () => {
    onDelete(id)
  }
  return (
    <li>
      <div>
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button onClick={deleteBtn} type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
