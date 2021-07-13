import React from 'react'
import './internships.css';
import { NavLink } from 'react-router-dom';


export const InternshipCard = () => {
    return (
        <>
            <div class="container cs_job_container">
                <div class="row">
                    <div class="col-md-4  cs_company_name">
                        <h5>COMPANY NAME</h5>
                        <p class="cs_skill_name">Trice</p>
                    </div>

                    <div class="col-md-8">
                        <h5>SKILLS REQUIRED</h5>

                        <button disabled={true} type="button" class="btn btn-outline-secondary cs_skill_button">CSS</button>
                        <button type="button" class="btn btn-outline-secondary cs_skill_button">HTML</button>
                        <button type="button" class="btn btn-outline-secondary cs_skill_button">Javascript</button>
                        <button type="button" class="btn btn-outline-secondary cs_skill_button">React</button>
                    </div>
                </div>
                <NavLink to="/admin/internship-detail/23">
                    <div class="row cs_button_row ">
                        <button className="btn btn-primary cs_job_button">
                            View Detail
                        </button>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

function Internships() {
    return (<>
        <div class="container cs_fist_container" >
            <div class="row">
                <h3 class="cs_heading_3">Find a job that you love!</h3>
            </div>
            <div class="row">
                <form class="d-flex col-11 cs_search">
                    <input class="form-control me-2 cs_search_input" type="search" aria-label="Search" />
                    <button class="btn btn-outline-success cs_button" type="submit">Search</button>
                </form>
            </div>
        </div>
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
    </>
    )
}

export default Internships;

