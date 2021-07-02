import React, { useState, useEffect } from "react";
import '../../components/Card/Card.css';
import Card from '../../components/Card/Card';
import { getMentors } from "../../actions/mentors";
import { useSelector, useDispatch } from 'react-redux';

function Mentors() {

    // let [mentors, setmentors] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMentors());
    }, [dispatch])
    const mentors = useSelector((state) => state.mentors.mentors);
    console.log(mentors, "mentors");

    return (
        !mentors.length ? <div>    loading </div> : (<div className="container-fluid">
            <div className="row">

                <div className="col-md-12 text-success">
                    <section id="cards">

                        <p className="h1 text-center text-secondary head">Mentors.</p>


                        <div className="container cards">

                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {/* <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card /> */}
                                {mentors.map((mentor, index) => {
                                    return (
                                        <Card key={index} id={mentor.id} name={mentor.name} bio={mentor.bio} role='mentor' />
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        ))
}

export default Mentors
