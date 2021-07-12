import UserProfile from "views/UserProfile.js";
import Notifications from "views/Notifications/Notification.js";
import Students from 'views/Students/Students.js'
import Mentors from 'views/Mentors/Mentors.js'
import Companies from 'views/Companies/Companies.js'
import DashboardCompany from "views/DashboardCompany/DashboardCompany";
import DashboardMentor from "views/DashboardMentor/DashboardMentor";
import DashboardStudent from "views/DashboardStudent/DashboardStudent";
import PostInternship from "views/PostInternship/PostInternship";
import Internships from "views/Internship/Internships";
import ProfileDetailComponent from './components/ProfileDetail/ProfileDetailComponent';
import MentorProfileDetail from './components/MentorProfileDetail/MentorProfileDetail';
import CompanyProfileDetail from './components/CompanyProfileDetail/CompanyProfileDetail';
import Communities from 'views/Communities/Communities';
import Messages from 'views/Messages/Messages';
import PostedInternships from "components/PostedInternships";
import InternshipDetail from "views/Internship/InternshipDetail";


export const studentRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard Student",
    icon: "nc-icon nc-chart-pie-35",
    component: DashboardStudent,
    layout: "/admin",
    hide: false,
  },
  {
    path: "/mentor/:id",
    name: "Mentor Profile Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: MentorProfileDetail,
    layout: "/admin",
    hide: true,
  },
  {
    path: "/internship-detail/:id",
    name: "Mentor Profile Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: InternshipDetail,
    layout: "/admin",
    hide: true,
  },

  {
    path: "/student-profile",
    name: "Std Profile",
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
    path: "/company/:id",
    name: "Company Profile Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: CompanyProfileDetail,
    layout: "/admin",
    hide: true,
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
    component: Messages,
    layout: "/admin",
  },
  {
    path: "/communites",
    name: "Communities",
    icon: "nc-icon nc-bell-55",
    component: Communities,
    layout: "/admin",
  },
  {
    path: "/student/:id",
    name: "deteail",
    icon: "nc-icon nc-bell-55",
    component: ProfileDetailComponent,
    layout: "/admin",
    hide: true
  },
];
export const mentorRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard Mentor",
    icon: "nc-icon nc-chart-pie-35",
    component: DashboardMentor,
    layout: "/admin",
  },
  {
    path: "/mentor/:id",
    name: "Mentor Profile Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: MentorProfileDetail,
    layout: "/admin",
    hide: true,
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
    path: "/company/:id",
    name: "Company Profile Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: CompanyProfileDetail,
    layout: "/admin",
    hide: true,
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
    component: Messages,
    layout: "/admin",
  },
  {
    path: "/communites",
    name: "Communities",
    icon: "nc-icon nc-bell-55",
    component: Communities,
    layout: "/admin",
  },
];
export const companyRoutes = [
  {
    path: "/intersnhip-detail/:id",
    name: "Intersnhip- detail",
    icon: "nc-icon nc-chart-pie-35",
    component: InternshipDetail,
    layout: "/admin",
    hide: true,
  },
  {
    path: "/posted-internships",
    name: "Posted Internships",
    icon: "nc-icon nc-chart-pie-35",
    component: PostedInternships,
    layout: "/admin",
    hide: true
  },
  {
    path: "/dashboard",
    name: "Dashboard compny",
    icon: "nc-icon nc-chart-pie-35",
    component: DashboardCompany,
    layout: "/admin",
  },
  {
    path: "/company/:id",
    name: "Company Profile Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: CompanyProfileDetail,
    layout: "/admin",
    hide: true,
  },
  {
    path: "/mentor/:id",
    name: "Mentor Profile Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: MentorProfileDetail,
    layout: "/admin",
    hide: true,
  },
  {
    path: "/company-profile",
    name: "Comp Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  }
  , {
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
    path: "/post-internship",
    name: "Post Internship",
    icon: "nc-icon nc-circle-09",
    component: PostInternship,
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
    component: Messages,
    layout: "/admin",
  }, {
    path: "/communites",
    name: "Communities",
    icon: "nc-icon nc-bell-55",
    component: Communities,
    layout: "/admin",
  },

];

