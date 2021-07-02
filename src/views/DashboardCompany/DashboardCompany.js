import React from 'react';

import './DashboardCompany.css';

function DashboardCompany() {
    return (
        <>
            <div className="row">

                <div className="col-lg-4  col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-5 col-md-4">
                                    <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-vector text-danger"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-md-8">
                                    <div className="numbers">
                                        <p className="card-category">Errors</p>
                                        <p className="card-title">23
                                  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer ">
                            <hr />
                            <div className="stats">
                                <i className="fa fa-clock-o"></i>
                              In the last hour
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-stats">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-5 col-md-4">
                                    <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-favourite-28 text-primary"></i>
                                    </div>
                                </div>
                                <div className="col-7 col-md-8">
                                    <div className="numbers">
                                        <p className="card-category">Followers</p>
                                        <p className="card-title">+45K
                                  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer ">
                            <hr />
                            <div className="stats">
                                <i className="fa fa-refresh"></i>
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
            <div className="container my-new-sec " id="ScrollBar-Design">
                <SubNav />
                <div className="container">
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
        <ul className="nav justify-content-around sticky-top sub-nav ">


            <li className="nav-item">
                <a className="nav-link active active-link" href="#">Hired</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Review Application </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Post Internship / Jobs </a>
            </li>
        </ul>
    )
}

export const Cart = () => {
    return (
        <div className="cart d-flex  flex-wrap justify-content-between">

        <div className="d-flex cart-p1">
            <div className="cart-pic">
                <img src={
                    require("assets/img/default-avatar.png")
                      .default
                  }  alt="profile-pic" />
            </div>
            <div className="cart-heading-details">
                <h2 className="cart-heading">Hunzala Mushtaq</h2>
                <p className="cart-details">Lot voluptates dolore cumque nesciunt est.</p>
            </div>
        </div>

        <div className="cart-p2 d-flex flex-column">
            <h2 className="status">status</h2>
            <p className="status-details">Available </p>
        </div>
    </div>
    )
}
