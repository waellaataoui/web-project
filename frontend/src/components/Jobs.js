import React, { useEffect, useState } from "react";
import axios from "axios";
import JobFilters from "./JobFilters";
import Job from "./Job";
const Jobs = () => {
  return (
    <>
      <div class="job-listing-area pt-120 pb-120">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-4">
              <JobFilters></JobFilters>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-8">
              <section class="featured-job-area">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="count-job mb-35">
                        <span>39, 782 Jobs found</span>
                        <div class="select-job-items">
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
                  <Job></Job>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-area pb-115 text-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-start">
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <span class="ti-angle-right"></span>
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
