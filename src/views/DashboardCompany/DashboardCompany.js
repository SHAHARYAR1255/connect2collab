import React from 'react';

import './DashboardCompany.css';

function DashboardCompany() {
    return (
        <>
            <div class="row">

                <div class="col-lg-4  col-md-6 col-sm-6">
                    <div class="card card-stats">
                        <div class="card-body ">
                            <div class="row">
                                <div class="col-5 col-md-4">
                                    <div class="icon-big text-center icon-warning">
                                        <i class="nc-icon nc-vector text-danger"></i>
                                    </div>
                                </div>
                                <div class="col-7 col-md-8">
                                    <div class="numbers">
                                        <p class="card-category">Errors</p>
                                        <p class="card-title">23
                                  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer ">
                            <hr />
                            <div class="stats">
                                <i class="fa fa-clock-o"></i>
                              In the last hour
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="card card-stats">
                        <div class="card-body ">
                            <div class="row">
                                <div class="col-5 col-md-4">
                                    <div class="icon-big text-center icon-warning">
                                        <i class="nc-icon nc-favourite-28 text-primary"></i>
                                    </div>
                                </div>
                                <div class="col-7 col-md-8">
                                    <div class="numbers">
                                        <p class="card-category">Followers</p>
                                        <p class="card-title">+45K
                                  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer ">
                            <hr />
                            <div class="stats">
                                <i class="fa fa-refresh"></i>
                              Update now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HiredComponent />
        </>

    )
}

export default DashboardCompany


export function HiredComponent() {
    return (
        <>
            <div class="container my-new-sec " id="ScrollBar-Design">
                <SubNav />
                <div class="container">
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
=               </div>
            </div>
        </>
    )
}

export function SubNav() {
    return (
        <ul class="nav justify-content-around sticky-top sub-nav ">


            <li class="nav-item">
                <a class="nav-link active active-link" href="#">Hired</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Review Application </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Post Internship / Jobs </a>
            </li>
        </ul>
    )
}

export const Cart = () => {
    return (
        <div class="cart d-flex  flex-wrap justify-content-between">

        <div class="d-flex cart-p1">
            <div class="cart-pic">
                <img s src={
                    require("assets/img/default-avatar.png")
                      .default
                  }  alt="profile-pic" />
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
    )
}
