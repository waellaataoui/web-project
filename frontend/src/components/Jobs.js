import React, { useEffect, useState } from "react";
import axios from "axios";
import JobFilters from "./JobFilters";
import Job from "./Job";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async (
    min = "",
    max = "",
    category = "",
    location = ""
  ) => {
    const res = await axios.get(
      `/posts?min=${min}&max=${max}&category=${category}&location=${location} `
    );
    console.log(res.data);
    setJobs(res.data);
  };
  return (
    <>
      <div className="job-listing-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <JobFilters fetchJobs={fetchJobs}></JobFilters>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <section className="featured-job-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="count-job mb-35">
                        <span>39, 782 Jobs found</span>
                        <div className="select-job-items">
                          <span>Sort by</span>
                          <select name="select">
                            <option value="">None</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                            <option value="">job list</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {
                    //here
                  }
                  <Job jobs={jobs}></Job>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-area pb-115 text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="ti-angle-right"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Jobs;
