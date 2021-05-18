import React, { Component } from "react";
import About from "../assets/img/hero/about.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export class Formation extends Component {
  render() {
    return (
      <div>
        <header />
        <main>
          <div className="slider-area ">
            <div
              className="single-slider section-overly slider-height2 d-flex align-items-center"
              style={{ backgroundImage: `url(${About}` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap text-center">
                      <h2>Your CV</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Put Your Formation</h2>
            </div>
            <hr />
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="diploma"
                        id="diploma"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your diploma'"
                        placeholder="Enter your diploma"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control w-100"
                        name="establishment"
                        id="establishment"
                        cols={30}
                        rows={9}
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your establishment'"
                        placeholder=" Enter your establishment"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="date"
                        id="date"
                        type="date"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter  the date'"
                        placeholder="Enter the date
      "
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    <a href="" className="btn">
                      Save
                    </a>
                  </button>
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    <a href="" className="btn">
                      Add
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Formation;
