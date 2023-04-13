import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

export default function Expenses ( props )
{
  const [ filteredYear, setFilteredYear ] = useState( '2020' );
  const filteredExpenses = props.items.filter( expense =>
  {
    return expense.date.getFullYear() === parseInt( filteredYear );
  } );


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={ filteredYear }
          onYearChange={ setFilteredYear } />

        { filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : filteredExpenses.map( ( exp ) => (
          <ExpenseItem
            key={ exp.id }
            title={ exp.title }
            date={ exp.date }
            amount={ exp.amount }
          />
        ) ) }

      </Card>
    </div>
  );
}