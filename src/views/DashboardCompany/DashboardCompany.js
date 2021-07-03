import React from 'react';

import './DashboardCompany.css';

function DashboardCompany() {
    return (
        <>




            <div class="content">

                <div class="container my-new-sec " id="ScrollBar-Design">


                    <SubNav />




                    <StudentCart />
                    <StudentCart />
                    <StudentCart />
                </div>
                    <Pagination />

            </div>



        </>

    )
}

export default DashboardCompany;

export function Pagination() {
    return (
        <div className="container Pagination-flex">
            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#" class="active">1</a>
                <a href="#" >2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">&raquo;</a>
            </div>
            </div>
    )
}

export function StudentCart() {
    return (
        <div class="cart d-flex  flex-wrap justify-content-between">
 
                 <div class="d-flex cart-p1">
                   <div class="cart-pic">
                     <img src={require("assets/img/default-avatar.png").default} alt="profile-pic" />
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


export function SubNav() {
    return (
        <ul className="nav justify-content-around sticky-top sub-nav ">


            <li className="nav-item">
                <a className="nav-link active active-link" href="#">Hired</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Review Application </a>
            </li>
        </ul>
    )
}
