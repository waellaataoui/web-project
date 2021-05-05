import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
import JobFilters from "../components/JobFilters"
import About from "../assets/img/hero/about.jpg"
import Jobs from '../components/Jobs'




const JobListing = () => {

   
    
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