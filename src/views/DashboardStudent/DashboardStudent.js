import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";


function Dashboard() {
  return (
    <>
      <div class="sidebar" data-image="../assets/img/sidebar-5.jpg">
        <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

        Tip 2: you can also add an image using data-image tag
     -->
        <div class="sidebar-wrapper">
          <div class="logo">
            <a href="http://www.creative-tim.com" class="simple-text">
              Connect2Collab
            </a>
          </div>
          <ul class="nav">
            <li class="nav-item ">
              <a class="nav-link" href="dashboard.html">
                <i class="nc-icon nc-chart-pie-35"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a class="nav-link" href="./user.html">
                <i class="nc-icon nc-circle-09"></i>
                <p>User Profile</p>
              </a>
            </li>
            <li>
              <a class="nav-link" href="./table.html">
                <i class="nc-icon nc-notes"></i>
                <p>Internships</p>
              </a>
            </li>
            <li>
              <a class="nav-link" href="./typography.html">
                <i class="nc-icon nc-paper-2"></i>
                <p>Mentors</p>
              </a>
            </li>
            <li>
              <a class="nav-link" href="./icons.html">
                <i class="nc-icon nc-atom"></i>
                <p>Companies</p>
              </a>
            </li>
            <li>
              <a class="nav-link" href="./maps.html">
                <i class="nc-icon nc-pin-3"></i>
                <p>Students</p>
              </a>
            </li>
            <li>
              <a class="nav-link" href="./notifications.html">
                <i class="nc-icon nc-bell-55"></i>
                <p>Notifications</p>
              </a>
            </li>
            <li>
              <a class="nav-link" href="./notifications.html">
                <i class="nc-icon nc-bell-55"></i>
                <p>Messages</p>
              </a>
            </li>
            <li class="nav-item active active-pro">
              <a class="nav-link active" href="upgrade.html">
                <i class="nc-icon nc-alien-33"></i>
                <p>Communities</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-panel">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg " color-on-scroll="500">
          <div class="container-fluid">
            <a class="navbar-brand" href="#pablo"> Dashboard </a>
            <button href="" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar burger-lines"></span>
              <span class="navbar-toggler-bar burger-lines"></span>
              <span class="navbar-toggler-bar burger-lines"></span>
            </button>

          </div>
        </nav>
        <!-- End Navbar -->
        <div class="content">
          <!--WORKING AREA-->
          <div class="container my-new-sec " id="ScrollBar-Design">


            <ul class="nav justify-content-around sticky-top sub-nav ">


              <li class="nav-item">
                <a class="nav-link active active-link" href="#">Hired</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Review Application </a>
              </li>
            </ul>


            <div class="container">

              <!-- cart 1 -->
              <div class="cart d-flex  flex-wrap justify-content-between">

                <div class="d-flex cart-p1">
                  <div class="cart-pic">
                    <img src="ProfilePhoto (1).jpg" alt="profile-pic" />
                  </div>
                  <div class="cart-heading-details">
                    <h2 class="cart-heading">Hunzala Mushtaq</h2>
                    <p class="cart-details">Lot voluptates dolore cumque nesciunt est.</p>
                  </div>
                </div>

                <div class="cart-p2 d-flex flex-column">
                  <h2 class="status">status</h2>
                  <p class="status-details">Available </p>
                </div>
              </div>
              <!-- cart end -->

              <!-- cart 1 -->
              <div class="cart d-flex  flex-wrap justify-content-between">

                <div class="d-flex cart-p1">
                  <div class="cart-pic">
                    <img src="ProfilePhoto (1).jpg" alt="profile-pic" />
                  </div>
                  <div class="cart-heading-details">
                    <h2 class="cart-heading">Hunzala Mushtaq</h2>
                    <p class="cart-details">Lot voluptates dolore cumque nesciunt est.</p>
                  </div>
                </div>

                <div class="cart-p2 d-flex flex-column">
                  <h2 class="status">status</h2>
                  <p class="status-details">Available </p>
                </div>
              </div>
              <!-- cart end -->
              <!-- cart 1 -->
              <div class="cart d-flex  flex-wrap justify-content-between">

                <div class="d-flex cart-p1">
                  <div class="cart-pic">
                    <img src="ProfilePhoto (1).jpg" alt="profile-pic" />
                  </div>
                  <div class="cart-heading-details">
                    <h2 class="cart-heading">Hunzala Mushtaq</h2>
                    <p class="cart-details">Lot voluptates dolore cumque nesciunt est.</p>
                  </div>
                </div>

                <div class="cart-p2 d-flex flex-column">
                  <h2 class="status">status</h2>
                  <p class="status-details">Available </p>
                </div>
              </div>
              <!-- cart end -->




            </div>

          </div>
          <div class="container Pagination-flex">
            <div class="pagination">
              <a href="#">&laquo;</a>
              <a href="#" class="active">1</a>
              <a href="#" >2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">&raquo;</a>
            </div></div>





        </div>

        <!--WORING END-->
      </div>

    </div>
   </div >
 
   </div >
        </>
    );
}

export default Dashboard;
