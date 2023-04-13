import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = ( props ) =>
{
  const newExpenseDataReciever = enteredExpenseData =>
  {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense( expenseData );
  };
  return <div className='new-expense'>
    <ExpenseForm onNewExpense={ newExpenseDataReciever } />
  </div>;
};

export default NewExpense;