import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import {useSelector, useDispatch } from 'react-redux';
import { AUTH } from './constants/actionTypes';

import AdminLayout from "layouts/Admin.js";
import Auth from './components/Auth/Auth.js'

const App = () => {
    const location = useHistory();
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    useEffect(() => {
        // const token = user?.token;
        //jwt;
        const a = JSON.parse(localStorage.getItem('profile')) ;
        if(a){
            dispatch({ type: AUTH, data: a });
        }
        // setUser(JSON.parse(localStorage.getItem('profile')));

    }, []);

    const user = useSelector((state) => state.auth.authData);
    
    console.log(user, 'user with redux store');
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={(props) => (!user ? <Auth /> : <AdminLayout role={user.role} {...props} />)} />
                {/* <Route path="/auth" exact component={() => } /> */}
                {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/admin" />)} /> */}
                <Redirect from="/" to="/admin" />

            </Switch>
        </BrowserRouter>
    )
}

export default App;