import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('should render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expenseTotal={0}/>)

    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={expenses[0].amount}/>)

    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expenseTotal={selectExpensesTotal(expenses)}/>)

    expect(wrapper).toMatchSnapshot()
})