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
import Role from './components/Role/Role.js'

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
                <Route path="/role" component={(props)=> <Role />} />
                {/* <Route path="/auth" exact component={() => } /> */}
                {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/admin" />)} /> */}
                <Redirect from="/" to="/admin" />

            </Switch>
        </BrowserRouter>
    )
}

export default App;


// import React, { useState, useEffect } from 'react';

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { BrowserRouter } from 'react-router-dom';

// // import Dashboard from "views/Dashboard.js";
// import UserProfile from "views/UserProfile.js";
// import Notifications from "views/Notifications.js";
// import Students from 'views/Students/Students.js'
// import Mentors from 'views/Mentors/Mentors.js'
// import Companies from 'views/Companies/Companies.js'
// import DashboardCompany from "views/DashboardCompany/DashboardCompany";
// import DashboardMentor from "views/DashboardMentor/DashboardMentor";
// import DashboardStudent from "views/DashboardStudent/DashboardStudent";
// import PostInternship from "views/PostInternship/PostInternship";
// import Internships from "views/Internship/Internships";
// import ProfileDetailComponent from './components/ProfileDetail/ProfileDetailComponent';
// import MentorProfileDetail from './components/MentorProfileDetail/MentorProfileDetail';
// import CompanyProfileDetail from './components/CompanyProfileDetail/CompanyProfileDetail';
// import Communities from 'views/Communities/Communities';
// import Messages from 'views/Messages/Messages';
// import { Role } from './role';
// import PrivateRoute from 'components/PrivateRoute';

// const App = () => {

//     const { pathname } = useLocation();
//     const [user, setUser] = useState({});
//     //     const user = useSelector((state) => state.auth.authData);

//     useEffect(() => {
//         const subscription = accountService.user.subscribe(x => setUser(x));
//         return subscription.unsubscribe;
//     }, []);

//     return (
//         <BrowserRouter>
//             <>
//                 <div className="wrapper">
//                     <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
//                     <div className="main-panel" ref={mainPanel}>
//                         <AdminNavbar />

//                         <div className="content">
//                             <Switch>
//                                 <Route exact path="/auth" component={<Auth />} />
//                                 <Redirect from="*" to="/" />
//                                 <PrivateRoute path='/company-dashbaord' roles={[Role.Company]} component={DashboardCompany}/>
//                                 <PrivateRoute path='/student-dashbaord' roles={[Role.Company]} component={DashboardStudent}/>
//                                 <PrivateRoute path='/students' roles={[Role.Company, Role.Student, Role.Mentor]} component={Students}/>
//                                 <PrivateRoute path='/mentors' roles={[Role.Company, Role.Student, Role.Mentor]} component={Mentors}/>
//                                 <PrivateRoute path='/companies' roles={[Role.Company, Role.Student, Role.Mentor]} component={Companies}/>
//                                 <PrivateRoute path='/post-internship' roles={[Role.Company]} component={PostInternship}/>
//                                 <PrivateRoute path='/internships' roles={[Role.Company, Role.Student, Role.Mentor]} component={Internships}/>
//                                 <PrivateRoute path='/mentor-dashbaord' roles={[Role.Company]} component={DashboardMentor}/>
//                                 <PrivateRoute path='/notifications' roles={[Role.Company, Role.Student, Role.Mentor]} component={Notifications}/>
//                                 <PrivateRoute path='/students/:id' roles={[Role.Company, Role.Student, Role.Mentor]} component={ProfileDetailComponent}/>
//                                 <PrivateRoute path='/mentor/:id' roles={[Role.Company, Role.Student, Role.Mentor]} component={MentorProfileDetail}/>
//                                 <PrivateRoute path='/company/:id' roles={[Role.Company, Role.Student, Role.Mentor]} component={CompanyProfileDetail}/>
//                                 <PrivateRoute path='/communities' roles={[Role.Company, Role.Student, Role.Mentor]} component={Communities}/>
//                                 <PrivateRoute path='/messages' roles={[Role.Company, Role.Student, Role.Mentor]} component={Messages}/>
//                                 <PrivateRoute path='/student-profile' roles={[Role.Student]} component={UserProfile}/>
//                                 <PrivateRoute path='/mentor-profile' roles={[Role.Mentor]} component={UserProfile}/>
//                                 <PrivateRoute path='/company-profile' roles={[Role.Company]} component={UserProfile}/>
//                                </Switch>
//                         </div>
//                         <Footer />
//                     </div>
//                 </div>
//             </>
//         </BrowserRouter>
//     )
// }

// export default App;