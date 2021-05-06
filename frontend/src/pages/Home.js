import React, { useState, useEffect } from "react";
import Select from 'react-select'

import Subscriptions from '../components/Subscriptions'

import Hero from "../assets/img/hero/h1_hero.jpg";
import Test from "../assets/img/gallery/cv_bg.jpg";
import Job from "../components/Job";
import axios from "axios";

const Home = () => {

  const [jobs, setJobs] = useState([]);
  const options = [
    { value: 'Tunis', label: 'Tunis' },
    { value: 'Sousse', label: 'Sousse' },
    { value: 'Sfax', label: 'Sfax' },
    { value: 'Monastir', label: 'Monastir' },
    { value: 'Mahdia', label: 'Mahdia' },
    { value: 'Gabes', label: 'Gabes' },
  ]
  const fetchjobs = async () => {
    const res = await axios.get(
      `/posts `
    );
    console.log(res.data);
    setJobs(res.data);
  };
  useEffect(() => {
    fetchjobs();

  }, [])

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
                  <div className="col-xl-6 col-lg-9 col-md-10">
                    <div className="hero__caption">
                      <h1>Find the most exciting startup jobs</h1>
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
                        />
                      </div>
                      <div className="select-form">
                        <Select className="react-select"
                          classNamePrefix="react-select"
                          placeholder="Location"
                          isClearable
                          options={options} />
                      </div>
                      <div className="search-form">
                        <a href="#">Find job</a>
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
                      <a href="job_listing.html">Machine Learning</a>
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
                      <a href="job_listing.html">Web Development</a>
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
                      <a href="job_listing.html">Data Science</a>
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
                      <a href="job_listing.html">Mobile Developement</a>
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
                      <a href="job_listing.html">Cyber Security</a>
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
                      <a href="job_listing.html">Information Technology</a>
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
                      <a href="job_listing.html">Networking</a>
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
                      <a href="job_listing.html">Management IT</a>
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
                  <a href="#" className="border-btn2 border-btn4">
                    Verify Your Skills
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          // featured jobs
        }
        <Job jobs={jobs} />
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
                          <img
                            src="assets/img/testmonial/testimonial-founder.png"
                            alt=""
                          />
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
                          <img
                            src="assets/img/testmonial/testimonial-founder.png"
                            alt=""
                          />
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
                          <img
                            src="assets/img/testmonial/testimonial-founder.png"
                            alt=""
                          />
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
      <footer>
        <div className="footer-area footer-bg footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-tittle">
                      <h4>About Us</h4>
                      <div className="footer-pera">
                        <p>
                          Heaven frucvitful doesn't cover lesser dvsays appear
                          creeping seasons so behold.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Contact Info</h4>
                    <ul>
                      <li>
                        <p>
                          Address :Your address goes here, your demo address.
                        </p>
                      </li>
                      <li>
                        <a href="#">Phone : +8880 44338899</a>
                      </li>
                      <li>
                        <a href="#">Email : info@colorlib.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Important Link</h4>
                    <ul>
                      <li>
                        <a href="#"> View Project</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Testimonial</a>
                      </li>
                      <li>
                        <a href="#">Proparties</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Newsletter</h4>
                    <div className="footer-pera footer-pera2">
                      <p>
                        Heaven fruitful doesn't over lesser in days. Appear
                        creeping.
                      </p>
                    </div>
                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form
                          target="_blank"
                          action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                          method="get"
                          className="subscribe_form relative mail_part"
                        >
                          <input
                            type="email"
                            name="email"
                            id="newsletter-form-email"
                            placeholder="Email Address"
                            className="placeholder hide-on-focus"
                            onFocus="this.placeholder = ''"
                            onBlur="this.placeholder = ' Email Address '"
                          />
                          <div className="form-icon">
                            <button
                              type="submit"
                              name="submit"
                              id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm"
                            >
                              <img src="assets/img/icon/form.png" alt="" />
                            </button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row footer-wejed justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-logo mb-20">
                  <a href="index.html">
                    <img src="assets/img/logo/logo2_footer.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="footer-tittle-bottom">
                  <span>5000+</span>
                  <p>Talented Hunter</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="footer-tittle-bottom">
                  <span>451</span>
                  <p>Talented Hunter</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                <div className="footer-tittle-bottom">
                  <span>568</span>
                  <p>Talented Hunter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area footer-bg">
          <div className="container">
            <div className="footer-border">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-10 col-lg-10 ">

                </div>
                <div className="col-xl-2 col-lg-2">
                  <div className="footer-social f-right">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Home;
