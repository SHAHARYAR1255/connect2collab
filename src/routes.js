import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Notifications from "views/Notifications.js";
import Students from 'views/Students/Students.js'
import Mentors from 'views/Mentors/Mentors.js'
import Companies from 'views/Companies/Companies.js'
import DashboardCompany from "views/DashboardCompany/DashboardCompany";
import DashboardMentor from "views/DashboardMentor/DashboardMentor";
import DashboardStudent from "views/DashboardStudent/DashboardStudent";
import Internships from "views/Internship/Internships";
const dashboardRoutes = [
  {
    path: "/dashboard-company",
    name: "Dashboard compny",
    icon: "nc-icon nc-chart-pie-35",
    component: DashboardCompany,
    layout: "/admin",
  }, {
    path: "/dashboard-mentor",
    name: "Dashboard Mentor",
    icon: "nc-icon nc-chart-pie-35",
    component: DashboardMentor,
    layout: "/admin",
  }, {
    path: "/dashboard-student",
    name: "Dashboard Student",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/student-profile",
    name: "Std Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  }, {
    path: "/company-profile",
    name: "Comp Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  }, {
    path: "/mentor-profile",
    name: "Mentor Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  }, {
    path: "/students",
    name: "Students",
    icon: "nc-icon nc-circle-09",
    component: Students,
    layout: "/admin",
  }, {
    path: "/mentors",
    name: "Mentors",
    icon: "nc-icon nc-circle-09",
    component: Mentors,
    layout: "/admin",
  }, {
    path: "/companies",
    name: "Companies",
    icon: "nc-icon nc-circle-09",
    component: Companies,
    layout: "/admin",
  },
  {
    path: "/internships",
    name: "Internships",
    icon: "nc-icon nc-circle-09",
    component: Internships,
    layout: "/admin",
  },

  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  }, {
    path: "/messages",
    name: "Messages",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
