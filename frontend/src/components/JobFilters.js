import React, { useState, useEffect } from "react";
import axios from "axios";

const JobFilters = (props) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setjobType] = useState({
    fullTime: 0,
    partTime: 0,
    remote: 0,
    internship: 0,
  });
  const seetjobType = (type) => {
    jobType.type = 1;
    //getjobtype();
  };
  const resetjobType = (type) => {
    jobType.type = 0;
    //getjobtype();
  };

  const getjobType = () => {
    var tab = "";
    Object.keys(jobType).map((element) => {
      if (jobType.element == 1) {
        tab = tab + jobType.element + ",";
      }
    });
    Promise.resolve(axios.get("/posts?jobType=" + tab)).then(
      function (value) {
        console.log(value.data); // "Success"
      },
    
    );
  };
  useEffect(() => {
    props.fetchJobs(min, max, category, location);
  }, [min, max, category, location]);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="small-section-tittle2 mb-45">
            <div className="ion">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12">
                <path
                  d="M7.8 12L12.2 12 12.2 10 7.8 10 7.8 12ZM0 0L0 2 20 2 20 0 0 0ZM3.3 7L16.7 7 16.7 5 3.3 5 3.3 7Z"
                  fill="rgb(27, 207, 107)"
                />
              </svg>
            </div>
            <h4>Filter Jobs</h4>
          </div>
        </div>
      </div>

      <div className="job-category-listing mb-50">
        <div className="single-listing">
          <div className="small-section-tittle2">
            <h4>Job Category</h4>
          </div>

          <div className="select-job-items2">
            <select onChange={(e) => setCategory(e.target.value)} name="select">
              <option value="">All Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Science">Data Science</option>
              <option value="Networking">Networking</option>
              <option value="Management IT">Management IT</option>
            </select>
          </div>

          <div className="select-Categories pt-80 pb-50">
            <div className="small-section-tittle2">
              <h4>Job Type</h4>
            </div>
            <label className="container">
              Full Time
              <input
                type="checkbox"
                onClick={(event) => {
                  if (event.target.checked) {
                    seetjobType("fullTime");
                  } else {
                    resetjobType("fullTime");
                  }
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Part Time
              <input
                type="checkbox"
                onClick={(event) => {
                  if (event.target.checked) {
                    seetjobType("partTime");
                  } else {
                    resetjobType("partTime");
                  }
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Remote
              <input
                type="checkbox"
                onClick={(event) => {
                  if (event.target.checked) {
                    seetjobType("remote");
                  } else {
                    resetjobType("remote");
                  }
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Internship
              <input
                type="checkbox"
                onClick={(event) => {
                  if (event.target.checked) {
                    seetjobType("internship");
                  } else {
                    resetjobType("internship");
                  }
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="single-listing">
          <div className="small-section-tittle2">
            <h4>Job Location</h4>
          </div>

          <div className="select-job-items2">
            <select
              onChange={(e) => {
                setLocation(e.target.value);

                //  props.fetch(min,max,category,location)
              }}
              name="select"
            >
              <option value="">Anywhere</option>
              <option value="Ariana">Ariana</option>
              <option value="Beja">Beja</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Bizerte">Bizerte</option>
              <option value="ElKef">ElKef</option>
              <option value="Gabes">Gabes</option>
              <option value="Gbelli">Gbelli</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jandouba">Jandouba</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kaserine">Kaserine</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Mounastir">Mounastir</option>
              <option value="Mednine">Mednine</option>
              <option value="Manouba">Manouba</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Sousse">Sousse</option>
              <option value="Sfax">Sfax</option>
              <option value="Siliana">Siliana</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Tunis">Tunis</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Tataouin">Tataouin</option>
              <option value="Zaghouan">Zaghouan</option>
            </select>
          </div>

          <div className="select-Categories pt-80 pb-50">
            <div className="small-section-tittle2">
              <h4>Experience</h4>
            </div>
            <label className="container">
              1-2 Years
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              2-3 Years
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              3-6 Years
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              6-more..
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>

        <div className="single-listing">
          <div className="select-Categories pb-50">
            <div className="small-section-tittle2">
              <h4>Posted Within</h4>
            </div>
            <label className="container">
              Any
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Today
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Last 2 days
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Last 3 days
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Last 5 days
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Last 10 days
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="single-listing">
          <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
            <div className="small-section-tittle2">
              <h4>Filter Jobs</h4>
            </div>
            <div className="widgets_inner">
              <div className="range_item">
                <div id="slider-range"></div>
                <input type="text" className="js-range-slider" value="" />
                <div className="d-flex align-items-center">
                  <div className="price_text">
                    <p>Price :</p>
                  </div>
                  <div className="price_value d-flex justify-content-center">
                    <input
                      type="text"
                      className="js-input-from"
                      id="amount"
                      readonly
                    />
                    <span>to</span>
                    <input
                      type="text"
                      className="js-input-to"
                      id="amount"
                      readonly
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
export default JobFilters;
