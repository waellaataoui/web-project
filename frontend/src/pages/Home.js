import React, { useState, useEffect } from "react";

import Select from "react-select";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import Subscriptions from "../components/Subscriptions";

import Hero from "../assets/img/hero/h1_hero.jpg";
import Test from "../assets/img/gallery/cv_bg.jpg";
import Job from "../components/Job";
import axios from "axios";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/authSlice";
import { Link } from "react-router-dom";
const Home = () => {
  const history = useHistory();

  let user = useSelector((state) => state.auth.user);
  let content;

  const { t, i18n } = useTranslation("homePage");
  const [category, setCategory] = useState("");
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");

  const options = [
    { value: "Tunis", label: "Tunis" },
    { value: "Sousse", label: "Sousse" },
    { value: "Sfax", label: "Sfax" },
    { value: "Monastir", label: "Monastir" },
    { value: "Mahdia", label: "Mahdia" },
    { value: "Gabes", label: "Gabes" },
  ];
  const fetchjobs = async () => {
    const res = await axios.get(`/posts `);
    console.log(res.data);
    setJobs(res.data);
  };

  const handlecategory = (category) => {
    // setCategory(category);
    // if (user){
    //   const res = axios.get(`/jobseekerInterest/${category}`);
    // }
    //if (category)
    //history.push(`/jobListing?category=${category}`); ///3aweni ya wael ma7abetch temchi thezni toul
  };

  const setcontent = () => {
    if (user)
      content = (
        <div className="section-tittle text-center">
          <span>Your fit Jobs</span>
          <h2>Recomanded Jobs</h2>
        </div>
      );
    else
      content = (
        <div className="section-tittle text-center">
          <span>Recent Job</span>
          <h2>Featured Jobs</h2>
        </div>
      );
  };

  useEffect(() => {
    setcontent();
    fetchjobs();
  }, []);

  const handlelocation = (selectedOption) => {
    setLocation(selectedOption.value.toLowerCase());
  };

  const handlechange = (e) => {
    setInterest(e.target.value);
    console.log(e.target.value);
  };

  const handleclick = () => {
    if (user) {
      const res = axios.get(`/jobseekerInterest/${interest}`);
    }
    history.push(`/jobListing?query=${interest}&location=${location}`);
  };

  return (
    <div>
      <main>
        <div className="slider-area ">
          <div className="slider-active">
            <div
              className="single-slider slider-height d-flex align-items-center"
              style={{ backgroundImage: `url(${Hero}` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 col-md-10">
                    <div className="hero__caption">
                      <h1>{t("title")} </h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8">
                    <form action="#" className="search-box">
                      <div className="input-form">
                        <input
                          type="text"
                          placeholder="Job Tittle or keyword"
                          onChange={handlechange}
                        />
                      </div>
                      <div className="select-form">
                        <Select
                          className="react-select"
                          classNamePrefix="react-select"
                          placeholder="Location"
                          isClearable
                          options={options}
                          onChange={handlelocation}
                        />
                      </div>
                      <div className="search-form">
                        <a onClick={handleclick}>Find job</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-services section-pad-t30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>FEATURED TOURS Packages</span>
                  <h2>Browse Categories </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-brain"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("machine learning")}>
                        Machine Learning
                      </a>
                    </h5>
                    <span>(653)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-cms"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("web development")}>
                        Web Development
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-report"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("data science")}>
                        Data Science
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-app"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("mobile development")}>
                        Mobile Developement
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-helmet"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("cyber security")}>
                        Cyber Security
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-high-tech"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("information technology")}>
                        Information Technology
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-real-estate"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("networking")}>Networking</a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-content"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a onClick={handlecategory("management it")}>
                        Management IT
                      </a>
                    </h5>
                    <span>(658)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <a href="job_listing.html" className="border-btn2">
                    Browse All Sectors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="online-cv cv-bg section-overly pt-90 pb-120"
          style={{ backgroundImage: `url(${Test}` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cv-caption text-center">
                  <p className="pera1">FEATURED TOURS Packages</p>
                  <p className="pera2">
                    {" "}
                    Make a Difference with Your Verified Resume!
                  </p>
                  <Link to="/exp" className="border-btn2 border-btn4">
                    Verify Your Skills
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          // featured jobs
        }
        <section className="featured-job-area feature-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {
                  //3aweni ya wael
                }
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-xl-10">
                <Job jobs={jobs} />
              </div>
            </div>
          </div>
        </section>

        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          data-background="assets/img/gallery/how-applybg.png"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle white-text text-center">
                  <span>Apply process</span>
                  <h2> How it works</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-search"></span>
                  </div>
                  <div className="process-cap">
                    <h5>1. Search a job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-curriculum-vitae"></span>
                  </div>
                  <div className="process-cap">
                    <h5>2. Apply for job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="process-cap">
                    <h5>3. Get your job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-area testimonial-padding">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img src="" alt="" />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscriptions">
          <Subscriptions></Subscriptions>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
