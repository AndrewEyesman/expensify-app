// import validator from 'validator'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configure-store'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

// import { addExpense } from './actions/expenses'
// import { setTextFilter } from './actions/filters'
// import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

// store.dispatch(addExpense({description: 'water bill', amount: 500, createdAt: 20000}))
// store.dispatch(addExpense({description: 'gas bill', amount: 200, createdAt: 5000}))
// store.dispatch(addExpense({description: 'rent', amount: 1090, createdAt: 1000}))

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
