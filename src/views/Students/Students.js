import React from 'react';
import Card from './Card';
import './Card.css';

function Students() {
    return (
        <div class="container-fluid">
            <div class="row">

                <div class="col-md-12 text-success">
                    <section id="cards">

                        <p class="h1 text-center text-secondary head">Students.</p>


                        <div class="container cards">

                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Students
