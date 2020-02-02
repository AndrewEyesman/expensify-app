import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ IsAuthenticated, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        IsAuthenticated ? (
            <Redirect to="/dashboard"/>
        ) : (
            <Component {...props}/>
        )
    )}/>
)

const mapStateToProps = (state) => ({
    IsAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)