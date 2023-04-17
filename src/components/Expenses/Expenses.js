import { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

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
        <ExpensesChart expenses={ filteredExpenses } />
        <ExpensesList items={ filteredExpenses } />
      </Card>
    </div>
  );
}