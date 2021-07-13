import React from 'react';
import './MentorProfileDetail.css';

function MentorProfileDetail() {
    return (
        <div className="content ">
            <div className="container-fluid ">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col-md-4 resumeBtn">
                        <div className="card card-user ">
                            <div className="card-image">
                                <img src="/assets/img/faces/bgprofilecard.jpg" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className="profilecard">
                                    <img src={
                                        require("assets/img/default-avatar.png")
                                            .default
                                    } className="card-img-top avatar border-grey "
                                        alt="..." />
                                    <h3 className="card-title">Mehnoor</h3>
                                    <br />
                                </div>
                                <p className="description text-center">
                                    This is my description
                                    <br />
                                    in two lines
                                </p>
                            </div>
                            <hr />
                            <div className="button-container mr-auto ml-auto">
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fa fa-facebook-square"></i>
                                </button>
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fa fa-github"></i>
                                </button>
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fa fa-twitter"></i>
                                </button>
                            </div>
                        </div>
                        <p><a href="#" className="bg-info text-light">Resume</a></p>
                    </div>
                    <div className="col-md-8  resumeBtn ">
                        <div className="card card-details">
                            <div className="card-body">
                                <h4 className="card-title">PROFILE INFO</h4>
                                <hr />
                                <h4 className="font-weight-normal text-center">Mehnoor Siddiqui</h4>
                                <br />
                                <div className="row">
                                    <div className="col-4">
                                        <p className="font-weight-bold">Qualification</p>
                                    </div>
                                    <div className="col-8 pr-0 pl-0">
                                        <p>MS (Software Engineering)</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <p className="font-weight-bold">About</p>
                                    </div>
                                    <div className="col-8 pr-0 pl-0">
                                        <p>This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <p className="font-weight-bold">Location</p>
                                    </div>
                                    <div className="col-8 pr-0 pl-0">
                                        <p>Karachi,Pakistan</p>
                                    </div>
                                </div><div className="row">
                                    <div className="col-4">
                                        <p className="font-weight-bold">Location</p>
                                    </div>
                                    <div className="col-8 pr-0 pl-0">
                                        <p>Karachi,Pakistan</p>
                                    </div>
                                </div><div className="row">
                                    <div className="col-4">
                                        <p className="font-weight-bold">Location</p>
                                    </div>
                                    <div className="col-8 pr-0 pl-0">
                                        <p>Karachi,Pakistan</p>
                                    </div>
                                </div><div className="row">
                                    <div className="col-4">
                                        <p className="font-weight-bold">Location</p>
                                    </div>
                                    <div className="col-8 pr-0 pl-0">
                                        <p>Karachi,Pakistan</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <p><a href="#" className="bg-info text-light">Resume</a></p> */}
                    </div>
                    <div className="col-md-8 offset-md-4">
                        <div className="card card-skill">
                            <div className="card-body">
                                <h4 className="card-title">SKILLS</h4>
                                <hr />
                                <p className="card-text"><i className="fa fa-thumb-tack text-info" aria-hidden="true"></i>&nbspHtml (3yr experence)</p>
                                <p className="card-text"><i className="fa fa-thumb-tack text-info" aria-hidden="true"></i>&nbspCSS (3yr experence)</p>
                                <p className="card-text"><i className="fa fa-thumb-tack text-info" aria-hidden="true"></i>&nbspReact (3yr experence)</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-8  offset-md-4 ">
                        <div className="card card-experience">
                            <div className="card-body">
                                <h4 className="card-title">EXPERIENCE</h4>
                                <hr />
                                <div className="row">
                                    <div className="col-4">
                                        <img src="/assets/img/faces/axaio.png" className="img-fluid w-100 h-100" />
                                    </div>
                                    <div className="col-8 pr-0 pl-0">
                                        <h5>Senior Software Engineer</h5>
                                        <p>Apr 2020 - Present</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorProfileDetail
