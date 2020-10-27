import React,{Component,useContext} from 'react'
import { Route,Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { AuthContext } from '../context/auth'

function PrivateRoute({component : Component,layout : Layout,...rest}) {
    const {user} = useContext(AuthContext)
    return (
        <Route {...rest} render={props => user ? (
                <Layout>
                     <Component {...props} />
                </Layout>
            ) : (
                <Redirect
                    to="/login"
                />
            )
        }
    ></Route>
    )}

export default PrivateRoute
