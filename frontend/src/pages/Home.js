import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../assets/img/hero/h1_hero.jpg";
import Test from "../assets/img/gallery/cv_bg.jpg";
import Job from "../components/Job";
import Footer from "../components/Footer";

const Home = () => {
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
                        <div className="select-itms">
                          <select name="select" id="select1">
                            <option value="">Location BD</option>
                            <option value="">Location PK</option>
                            <option value="">Location US</option>
                            <option value="">Location UK</option>
                          </select>
                        </div>
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
        <Job />
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
        <div className="support-company-area support-padding fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  <div className="section-tittle section-tittle2">
                    <span>What we are doing</span>
                    <h2>24k Talented people are getting Jobs</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Mollit anim laborum duis au dolor in voluptate velit ess
                      cillum dolore eu lore dsu quality mollit anim laborumuis
                      au dolor in voluptate velit cillum.
                    </p>
                    <p>
                      Mollit anim laborum.Duis aute irufg dhjkolohr in re
                      voluptate velit esscillumlore eu quife nrulla parihatur.
                      Excghcepteur signjnt occa cupidatat non inulpadeserunt
                      mollit aboru. temnthp incididbnt ut labore mollit anim
                      laborum suis aute.
                    </p>
                    <a href="about.html" className="btn post-btn">
                      Post a job
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/service/support-img.jpg" alt="" />
                  <div className="support-img-cap text-center">
                    <p>Since</p>
                    <span>1994</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog-area blog-h-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>Our latest blog</span>
                  <h2>Our recent news</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/blog/home-blog1.jpg" alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3>
                        <a href="single-blog.html">
                          Footprints in Time is perfect House in Kurashiki
                        </a>
                      </h3>
                      <a href="#" className="more-btn">
                        Read more »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src="assets/img/blog/home-blog2.jpg" alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3>
                        <a href="single-blog.html">
                          Footprints in Time is perfect House in Kurashiki
                        </a>
                      </h3>
                      <a href="#" className="more-btn">
                        Read more »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
};
export default Home;
