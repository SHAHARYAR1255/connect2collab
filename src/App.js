import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import Auth from './components/Auth/Auth.js'

const App = () => {
    // const location = useHistory();

    const user = JSON.parse(localStorage.getItem('profile'));
    // useEffect(() => {
    //     const token = user?.token;
    //     //jwt

    //     setUser(JSON.parse(localStorage.getItem('profile')));

    // },[location]);

    console.log(user, 'user');
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={(props) => <AdminLayout role={user.role} {...props} />} />
                {/* <Route path="/auth" exact  compoenent={() => <Auth />}/> */}
                <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/admin" />)} />
                <Redirect from="/" to="/auth" />
                
            </Switch>
        </BrowserRouter>
    )
}

export default App;