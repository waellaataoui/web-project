import React from 'react'
import { Link } from "react-router-dom"
import Header from "../components/Header"
const Home = () => {
    return (
        <div>
            <Header></Header>
            <main>

                <div className="slider-area ">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center" data-background="assets/img/hero/h1_hero.jpg">
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
                                                <input type="text" placeholder="Job Tittle or keyword" />
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
                                    <h2>Browse Top Categories </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-contnet-center">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-services text-center mb-30">
                                    <div className="services-ion">
                                        <span className="flaticon-tour"></span>
                                    </div>
                                    <div className="services-cap">
                                        <h5><a href="job_listing.html">Design & Creative</a></h5>
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
                                        <h5><a href="job_listing.html">Design & Development</a></h5>
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
                                        <h5><a href="job_listing.html">Sales & Marketing</a></h5>
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
                                        <h5><a href="job_listing.html">Mobile Application</a></h5>
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
                                        <h5><a href="job_listing.html">Construction</a></h5>
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
                                        <h5><a href="job_listing.html">Information Technology</a></h5>
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
                                        <h5><a href="job_listing.html">Real Estate</a></h5>
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
                                        <h5><a href="job_listing.html">Content Writer</a></h5>
                                        <span>(658)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="browse-btn2 text-center mt-50">
                                    <a href="job_listing.html" className="border-btn2">Browse All Sectors</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="online-cv cv-bg section-overly pt-90 pb-120" data-background="assets/img/gallery/cv_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="cv-caption text-center">
                                    <p className="pera1">FEATURED TOURS Packages</p>
                                    <p className="pera2"> Make a Difference with Your Online Resume!</p>
                                    <a href="#" className="border-btn2 border-btn4">Upload your cv</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="featured-job-area feature-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle text-center">
                                    <span>Recent Job</span>
                                    <h2>Featured Jobs</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="single-job-items mb-30">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <a href="job_details.html"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link f-right">
                                        <a href="job_details.html">Full Time</a>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                                <div className="single-job-items mb-30">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <a href="job_details.html"><img src="assets/img/icon/job-list2.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link f-right">
                                        <a href="job_details.html">Full Time</a>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                                <div className="single-job-items mb-30">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <a href="job_details.html"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link f-right">
                                        <a href="job_details.html">Full Time</a>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                                <div className="single-job-items mb-30">
                                    <div className="job-items">
                                        <div className="company-img">
                                            <a href="job_details.html"><img src="assets/img/icon/job-list4.png" alt="" /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <ul>
                                                <li>Creative Agency</li>
                                                <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                                <li>$3500 - $4000</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-link f-right">
                                        <a href="job_details.html">Full Time</a>
                                        <span>7 hours ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="apply-process-area apply-bg pt-150 pb-150" data-background="assets/img/gallery/how-applybg.png">
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
                                        <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
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
                                        <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
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
                                        <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
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
                                                    <img src="assets/img/testmonial/testimonial-founder.png" alt="" />
                                                    <span>Margaret Lawson</span>
                                                    <p>Creative Director</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-top-cap">
                                                <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-testimonial text-center">
                                        <div className="testimonial-caption ">
                                            <div className="testimonial-founder  ">
                                                <div className="founder-img mb-30">
                                                    <img src="assets/img/testmonial/testimonial-founder.png" alt="" />
                                                    <span>Margaret Lawson</span>
                                                    <p>Creative Director</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-top-cap">
                                                <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-testimonial text-center">
                                        <div className="testimonial-caption ">
                                            <div className="testimonial-founder  ">
                                                <div className="founder-img mb-30">
                                                    <img src="assets/img/testmonial/testimonial-founder.png" alt="" />
                                                    <span>Margaret Lawson</span>
                                                    <p>Creative Director</p>
                                                </div>
                                            </div>
                                            <div className="testimonial-top-cap">
                                                <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
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
                                        <p className="pera-top">Mollit anim laborum duis au dolor in voluptate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillum.</p>
                                        <p>Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur signjnt occa cupidatat non inulpadeserunt mollit aboru. temnthp incididbnt ut labore mollit anim laborum suis aute.</p>
                                        <a href="about.html" className="btn post-btn">Post a job</a>
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
                                            <p>|   Properties</p>
                                            <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                            <a href="#" className="more-btn">Read more »</a>
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
                                            <p>|   Properties</p>
                                            <h3><a href="single-blog.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                                            <a href="#" className="more-btn">Read more »</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                                <p>Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
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
                                                <p>Address :Your address goes
                                        here, your demo address.</p>
                                            </li>
                                            <li><a href="#">Phone : +8880 44338899</a></li>
                                            <li><a href="#">Email : info@colorlib.com</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Important Link</h4>
                                        <ul>
                                            <li><a href="#"> View Project</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Testimonial</a></li>
                                            <li><a href="#">Proparties</a></li>
                                            <li><a href="#">Support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Newsletter</h4>
                                        <div className="footer-pera footer-pera2">
                                            <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                                        </div>
                                        <div className="footer-form" >
                                            <div id="mc_embed_signup">
                                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                                    method="get" className="subscribe_form relative mail_part">
                                                    <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                                        className="placeholder hide-on-focus" onFocus="this.placeholder = ''"
                                                        onBlur="this.placeholder = ' Email Address '" />
                                                    <div className="form-icon">
                                                        <button type="submit" name="submit" id="newsletter-submit"
                                                            className="email_icon newsletter-submit button-contactForm"><img src="assets/img/icon/form.png" alt="" /></button>
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
                                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
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
                                    <div className="footer-copy-right">

                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2">
                                    <div className="footer-social f-right">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fas fa-globe"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Home;