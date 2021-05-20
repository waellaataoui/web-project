import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../assets/img/hero/about.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export class Skills extends Component {
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
                      <h2>SKILL</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Put Your Skills</h2>
            </div>
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
                        name="skill"
                        id="skill"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your skill'"
                        placeholder="Enter your skill"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="laguage"
                        id="laguage"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your laguage"
                        placeholder="Enter your laguage"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <select>
                        <option value=""> Enter your skill </option>
                        <option value="ReactJs">ReactJs</option>
                        <option value="Javacript">Javacript</option>
                        <option value=" Angular">Angular</option>
                        <option value="Java">Java</option>
                        <option value="JEE">JEE</option>
                        <option value=" PHP">PHP</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <select>
                        <option value=""> Enter your Language </option>
                        <option value="frensh">Frensh</option>
                        <option value="Engkish">Engkish</option>
                        <option value=" Arabic">Arabic</option>
                      </select>
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

export default Skills;
