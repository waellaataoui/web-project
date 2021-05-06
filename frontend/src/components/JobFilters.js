import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const JobFilters = (props) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setjobType] = useState([
    {id: 1, value: "Part Time", isChecked: false},
    {id: 2, value: "Full Time", isChecked: false},
    {id: 3, value: "Remote", isChecked: false},
    {id: 4, value: "Internship", isChecked: false}]
  );
  const [typeValue, setTypeValue] = useState("");
  

  const updatejobType = (e) => {

    
    const types= jobType.map(type => {
      if (type.value === e.target.value)
        type.isChecked =  e.target.checked
      return type  
    })
    setjobType(types);
    console.log(jobType);
    //console.log(e.target.value);

  };

 

  useEffect(() => {
    let str = "";
    jobType.forEach(type=>{
      if (type.isChecked){
        str += type.value + ",";
      }
    })
    console.log(str);
    
    props.fetchJobs(min, max, category, location, str);
  }, [min, max, category, location, jobType]);

  // bellow is for filter salary part
  const useStyles = makeStyles({
    root: {
      width: 180,
    },
  });
  const classes = useStyles();
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMin(newValue[0]);
    setMax(newValue[1]);
    console.log(min, max);
  };
  function valuetext(value) {
    return `${value}`;
  }

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
            
            {jobType.map(type=>(
              <>
                <label className="container">
              {type.value}
              <input
                type="checkbox"
                key={type.id}
                onChange ={updatejobType}
                value = {type.value}
              />
              <span className="checkmark"></span>
            </label>
              </>

            ))}
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
        </div>

        <div className="single-listing">
          <div className="select-Categories pb-50">
            <div className="small-section-tittle2">
              <br></br>
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
                <div className={classes.root}>
                  <Slider
                    value={value}
                    min={0}
                    max={3000}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
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