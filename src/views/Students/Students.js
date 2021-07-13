import React, { useState, useEffect } from "react";
import '../../components/Card/Card.css';
import Card from '../../components/Card/Card';
import { getStudents } from "../../actions/students";
import { useSelector, useDispatch } from 'react-redux';

function Students() {

    // let [students, setStudents] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch])
    const students = useSelector((state) => state.students.students);
    console.log(students, "students");

    return (
        !students.length ? <div>    loading </div> : (<div className="container-fluid">
            <div className="row">

                <div className="col-md-12 text-success">
                    <section id="cards">

                        <p className="h1 text-center text-secondary head">Students.</p>


                        <div className="container cards">

                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {/* <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card /> */}
                                {students.map((student, index) => {
                                    return (
                                        <Card key={index} id={student.id} firstname={student.name.firstname} lastname={student.name.lastname} bio={student.bio} role="student" />
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

export default Students
