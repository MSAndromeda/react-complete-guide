import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ( props ) =>
{
  const [ enteredTitle, setEnteredTitle ] = useState( '' );
  const [ enteredAmount, setEnteredAmount ] = useState( '' );
  const [ enteredDate, setEnteredDate ] = useState( '' );
  const [ flag, setFlag ] = useState( 1 );

  const titleChangeHandler = ( e ) =>
  {
    setEnteredTitle( e.target.value );
  };
  const amountChangeHandler = ( e ) =>
  {
    setEnteredAmount( e.target.value );
  };
  const dateChangeHandler = ( e ) =>
  {
    setEnteredDate( e.target.value );
  };



  const flagHandler = () =>
  {
    setFlag( flag ? 0 : 1 );
  };

  const submitHandler = ( e ) =>
  {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: Number( enteredAmount ),
      date: new Date( enteredDate )
      // date: enteredDate.split( "-" ).map( x => Number( x ) )
    };
    props.onNewExpense( expenseData );
    console.log( expenseData );
    setEnteredTitle( '' );
    setEnteredAmount( '' );
    setEnteredDate( '' );
  };



  if ( flag )
    return (
      <div>
        <button onClick={ flagHandler }>
          <h2>Add New Expenses</h2>
        </button>
      </div>
    );

  return (
    <form onSubmit={ submitHandler }>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'
            value={ enteredTitle }
            onChange={ titleChangeHandler } />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number'
            value={ enteredAmount }
            min={ 0.01 }
            step={ 0.01 }
            onChange={ amountChangeHandler } />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'
            value={ enteredDate }
            min='2019-01-01'
            max='2023-12-31'
            onChange={ dateChangeHandler } />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={ flagHandler }>Cancel</button>
        <button type='submit' onClick={ flagHandler }>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;