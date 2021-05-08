import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Job = (props) => {
  
  /*     const fetchPosts =     async (min="",max=
    "",category="",location="") => {

        const res = await axios.get(`/posts?min=${min}&max=${max}&category=${category}&location=${location} `);
        console.log(res.data);
        setData(res.data);
      
        }
    useEffect(() => {
 
          fetchPosts();           
    }, []) */

  useEffect(() => {
    
    console.log("job list component", props.jobs);
  }, []);

  return (
    <div>
      {props.jobs.map((job, index) => (
        <div key={index}>
          <div className="single-job-items mb-30">
            <div className="job-items">
              <div className="company-img">
                <a href="#">
                  <img src="assets/img/icon/job-list4.png" alt=""></img>
                </a>
              </div>
              <div className="job-tittle job-tittle2">
                <a href="#">
                  <h4> {job.title}</h4>
                </a>
                <ul>
                  <li>{job.employeur.fullname}</li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    {job.location}{" "}
                  </li>
                  <li>{job.price} </li>
                </ul>
              </div>
            </div>
            <div className="items-link items-link2 f-right">
              <Link to={{pathname: `/jobDetails/${job.id}`}}>{job.jobType} </Link>
              <span>{ ((new Date().getTime()) - (new Date(props.jobs.getCreatedAt).getTime())) / (1000 * 60 * 60 * 24)}</span>
            </div>
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Job;
