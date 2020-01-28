import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => (
    <div>
        <p>
            {
                expenseCount > 0 ? (
                    expenseCount === 1 ? 
                    (`Viewing 1 expense totalling ${numeral(expenseTotal / 100).format('$0,0.00')}`) : 
                    (`Viewing ${expenseCount} expenses totalling ${numeral(expenseTotal / 100).format('$0,0.00')}`)
                ) : 'Add an expense to get started!'
            }
        </p>
    </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)