import React from 'react';
import './MentorProfileDetail.css';

function MentorProfileDetail() {
    return (
        <div class="content ">
            <div class="container-fluid ">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col-md-4 resumeBtn">
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
                                    <h3 class="card-title">Mehnoor</h3>
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
                        <p><a href="#" class="bg-info text-light">Resume</a></p>
                    </div>
                    <div class="col-md-8  resumeBtn ">
                        <div class="card card-details">
                            <div class="card-body">
                                <h4 class="card-title">PROFILE INFO</h4>
                                <hr />
                                <h4 class="font-weight-normal text-center">Mehnoor Siddiqui</h4>
                                <br />
                                <div class="row">
                                    <div class="col-4">
                                        <p class="font-weight-bold">Qualification</p>
                                    </div>
                                    <div class="col-8 pr-0 pl-0">
                                        <p>MS (Software Engineering)</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <p class="font-weight-bold">About</p>
                                    </div>
                                    <div class="col-8 pr-0 pl-0">
                                        <p>This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <p class="font-weight-bold">Location</p>
                                    </div>
                                    <div class="col-8 pr-0 pl-0">
                                        <p>Karachi,Pakistan</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <p><a href="#" class="bg-info text-light">Resume</a></p>
                    </div>
                    <div class="col-md-8 offset-md-4">
                        <div class="card card-skill">
                            <div class="card-body">
                                <h4 class="card-title">SKILLS</h4>
                                <hr />
                                <p class="card-text"><i class="fa fa-thumb-tack text-info" aria-hidden="true"></i>&nbspHtml (3yr experence)</p>
                                <p class="card-text"><i class="fa fa-thumb-tack text-info" aria-hidden="true"></i>&nbspCSS (3yr experence)</p>
                                <p class="card-text"><i class="fa fa-thumb-tack text-info" aria-hidden="true"></i>&nbspReact (3yr experence)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8  offset-md-4 ">
                        <div class="card card-experience">
                            <div class="card-body">
                                <h4 class="card-title">EXPERIENCE</h4>
                                <hr />
                                <div class="row">
                                    <div class="col-4">
                                        <img src="/assets/img/faces/axaio.png" class="img-fluid w-100 h-100" />
                                    </div>
                                    <div class="col-8 pr-0 pl-0">
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
