import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({ IsAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        IsAuthenticated ? (
            <div>
                <Header />
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/"/>
        )
    )}/>
)

const mapStateToProps = (state) => ({
    IsAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)