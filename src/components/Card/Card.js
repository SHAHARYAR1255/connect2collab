import React from 'react';
import './Card.css';
import {NavLink} from 'react-router-dom';

function Card({ firstname, lastname, bio, role, id }) {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={
                    require("assets/img/default-avatar.png")
                        .default
                } alt="mentor" className="icon_1 image-fluid" />

                <div className="card-body">
                    <h5 className="card-title text-center c1_head">{firstname} {lastname}</h5>
                    <p className="card-text text-center text-dark">{bio}</p>
                    <div className="container text-center">
                        <button type="button"
                            className="btn btn-primary bt-1">Follow</button>
                        <button type="button"
                            className="btn btn-outline-secondary bt-1 bt-1a">
                            {/* <img
                                src="../assets/img/icons/message.png" alt="email"
                                className="email" /> */}

                        </button>

                    </div>
                    <div className="container text-center footer">
                        <button type="button"
                            className="btn btn-link border border-primary">
                            <p className="h6"><NavLink to={`/admin/${role}/${id}`}>View Profile</NavLink></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
