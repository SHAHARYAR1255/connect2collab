import React, { useState, useEffect } from "react";
import '../../components/Card/Card.css';
import Card from '../../components/Card/Card';
import { getCompanies } from "../../actions/companies";
import { useSelector, useDispatch } from 'react-redux';

function Companies() {

    // let [companies, setcompanies] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCompanies());
    }, [dispatch])
    const companies = useSelector((state) => state.companies.companies);
    console.log(companies, "companies");

    return (
        !companies.length ? <div>    loading </div> : (<div className="container-fluid">
            <div className="row">

                <div className="col-md-12 text-success">
                    <section id="cards">

                        <p className="h1 text-center text-secondary head">companies.</p>


                        <div className="container cards">

                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                {/* <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card /> */}
                                {companies.map((companies, index) => {
                                    return (
                                        <Card key={index} name={companies.name} bio={companies.bio} />
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

export default Companies
