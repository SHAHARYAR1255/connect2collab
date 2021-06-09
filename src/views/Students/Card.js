import React from 'react';
import './Card.css';

function Card() {
    return (
        <div class="col">
            <div class="card h-100">
                <img src={
                    require("assets/img/default-avatar.png")
                      .default
                  } alt="mentor" class="icon_1 image-fluid" />

                <div class="card-body">
                    <h5 class="card-title text-center c1_head">John Doe</h5>
                    <p class="card-text text-center text-dark">Graphics Designer</p>
                    <div class="container text-center">
                        <button type="button"
                            class="btn btn-primary bt-1">Follow</button>
                        <button type="button"
                            class="btn btn-outline-secondary bt-1 bt-1a">
                            {/* <img
                                src="../assets/img/icons/message.png" alt="email"
                                class="email" /> */}
                                
                        </button>

                    </div>
                    <div class="container text-center footer">
                        <button type="button"
                            class="btn btn-link border border-primary">
                            <p class="h6">View Profile</p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
