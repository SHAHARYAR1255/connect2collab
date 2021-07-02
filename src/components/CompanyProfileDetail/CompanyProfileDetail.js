import React from 'react';
import './CompanyProfileDetail.css'

const CompanyProfileDetail = () => {
    return (
        <div class="content ">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col-md-4">
                        <div class="card card-user ">
                            <div class="card-image">
                                <img src="/assets/img/faces/bgprofilecard.jpg" alt="..." />
                            </div>
                            <div class="card-body">
                                <div class="profilecard">
                                    <img src={
                                        require("assets/img/default-avatar.png")
                                            .default
                                    } class="card-img-top avatar border-grey "
                                        alt="..." />
                                    <h3 class="card-title">Unilever</h3>
                                    <br />
                                </div>
                                <p class="description text-center">
                                    This is my description
                                        <br />
                                        in two lines
                                    </p>
                            </div>
                            <hr />
                            <div class="button-container mr-auto ml-auto">
                                <button href="#" class="btn btn-simple btn-link btn-icon">
                                    <i class="fa fa-facebook-square"></i>
                                </button>
                                <button href="#" class="btn btn-simple btn-link btn-icon">
                                    <i class="fa fa-github"></i>
                                </button>
                                <button href="#" class="btn btn-simple btn-link btn-icon">
                                    <i class="fa fa-twitter"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8  ">
                        <div class="card card-details">
                            <div class="card-body">
                                <h4 class="card-title">Overview</h4>
                                <hr />
                                <div class="row">
                                    <div class="col-4">
                                        <p class="font-weight-bold">Website</p>
                                    </div>
                                    <div class="col-8 pr-0 pl-0">
                                        <a href="#">www.unilever.com</a>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-4">
                                        <p class="font-weight-bold">Founded</p>
                                    </div>
                                    <div class="col-8 pr-0 pl-0">
                                        <p>1995</p>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-4">
                                        <p class="font-weight-bold">No. of employees</p>
                                    </div>
                                    <div class="col-8 pr-0 pl-0">
                                        <p>400-500</p>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-4">
                                        <p class="font-weight-bold">About</p>
                                    </div>
                                    <div class="col-8 pr-0 pl-0">
                                        <p>Our Vision Statement<br />
                                            A world of enabled and connected little minds, building future.
                                            <br />
                                            <br />
                                            Our Mission Statement<br />
                                            To inspire students, help them innovate and let them integrate to build the next generation humankind.</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default CompanyProfileDetail;