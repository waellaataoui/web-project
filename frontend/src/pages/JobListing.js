import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import JobFilters from "../components/JobFilters"
import About from "../assets/img/hero/about.jpg"
import Jobs from '../components/Jobs'




const JobListing = () => {

    const [data, setData] = useState([])

    var date = new Date('2021-04-29 17:12:50')
    var now = new Date().getTime() /1000;

    useEffect(() => {
       
         Promise.resolve(axios.get("/posts")).then(function(value) {
             console.log(value.data); // "Success"
             setData(value.data);
         }, 
         function(value) {
             // not called
         });
                     
    }, [])
    
    return(
        <div>
            <header />
            <main>
    
                <div className="slider-area ">
                    <div className="single-slider section-overly slider-height2 d-flex align-items-center" style={{backgroundImage: `url(${About}` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Get your job</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                       
                <Jobs></Jobs>
                

            </main>
        </div>
    )
}
export default JobListing;