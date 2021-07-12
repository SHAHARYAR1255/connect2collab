import React from 'react'
import './internships.css';

function InternshipDetail() {
    return (
        <> <div class="container-fluid ">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col-md-4 resumeBtn">
                    <div class="card card-user ">
                        <div class="card-image">
                            <img src="/assets/img/faces/bgprofilecard.jpg" alt="..." />
                        </div>
                        <div class="card-body">
                            <div class="profilecard">
                                <img src="/assets/img/faces/face-3.jpg" class="card-img-top avatar border-grey "
                                    alt="..." />
                                <h3 class="card-title">Company Name</h3>
                                <br />
                            </div>
                            <p class="description text-center">
                                This is my company description
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
                            <button href="#" class="btn btn-simple btn-link btn-icon">
                                <i class="fa fa-stack"></i>
                            </button>

                        </div>
                    </div>
                    {/* <p><a href="#" class="bg-info text-light">Resume</a></p> */}
                </div>
                <div class="col-md-8  ">
                    <div class="card card-details">
                        <div class="card-body">
                            <h4 class="card-title">JOB DETAILS</h4>
                            <hr />
                            {/* <h4 class="font-weight-normal text-center">Mehnoor Siddiqui</h4> */}
                            <br />
                            <div class="row">
                                <div class="col-4">
                                    <p class="font-weight-bold">Job Type</p>
                                </div>
                                <div class="col-8 pr-0 pl-0">
                                    <p>Web Development</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <p class="font-weight-bold">Number of hires</p>
                                </div>
                                <div class="col-8 pr-0 pl-0">
                                    <p>3/5</p>
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

                            <div class="row">
                                <div class="col-4">
                                    <p class="font-weight-bold">Work Remotly</p>
                                </div>
                                <div class="col-8 pr-0 pl-0">
                                    <p>Yes</p>
                                </div>
                            </div>


                        </div>

                    </div>


                </div>

                <div class="col-md-8 offset-md-4 cs_job_detail_2">
                    <div class="card card-details">
                        <div class="card-body">
                            <h4 class="card-title">JOB DESCRIPTION</h4>
                            <hr />
                            {/* <!-- <h4 class="font-weight-normal text-center">Mehnoor Siddiqui</h4>--> */}
                            <br />
                            <div class="row">
                                <div class="col-4">
                                    <p class="font-weight-bold">About</p>
                                </div>
                                <div class="col-8 pr-0 pl-0">
                                    <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-8 offset-md-4">
                    <div class="card card-skill">
                        <div class="card-body">
                            <h4 class="card-title">SKILLS REQUIRED</h4>
                            <hr />
                            <div class="row cs_skill_row">
                                <div class="col-md-4 cs_skill_name"> <p class="card-text"><i class="fa fa-thumb-tack text-info" aria-hidden="true"></i>HTML :</p></div>
                                <div class="col-md-8 skill_container">
                                    <div class="skills skill1"><b>(Expert)</b></div>
                                </div>
                            </div>

                            <div class="row cs_skill_row">
                                <div class="col-md-4 cs_skill_name"> <p class="card-text"><i class="fa fa-thumb-tack text-info" aria-hidden="true"></i>CSS :</p></div>
                                <div class="col-md-8 skill_container">
                                    <div class="skills skill2"><b>(Intermediate)</b></div>
                                </div>
                            </div>

                            <div class="row cs_skill_row">
                                <div class="col-md-4 cs_skill_name"> <p class="card-text"><i class="fa fa-thumb-tack text-info" aria-hidden="true"></i>REACT :</p></div>
                                <div class="col-md-8 skill_container">
                                    <div class="skills skill3"><b>(Intermediate)</b></div>
                                </div>
                            </div>

                            <div class="row cs_skill_row">
                                <div class="col-md-4 cs_skill_name"> <p class="card-text"><i class="fa fa-thumb-tack text-info" aria-hidden="true"></i>REACT :</p></div>
                                <div class="col-md-8 skill_container">
                                    <div class="skills skill4"><b>(Beginner)</b></div>
                                </div>
                            </div>



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
                                    <img src="/assets/img/faces/inernsPak.png" class="img-fluid" />
                                </div>
                                <div class="col-8 pr-0 pl-0">
                                    <h5>React Developer</h5>
                                    <p>Inerns Pakistan .Internship</p>
                                    <p>Apr 2020 - May 2020 .2 mos</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default InternshipDetail
