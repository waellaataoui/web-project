import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../assets/img/hero/about.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export class CreateCV extends Component {
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
                      <h2>Create CV</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">
                You want to create your CV now or leave it for later?
              </h2>
            </div>
          </div>
          <div className="form-group mt-3">
            <button
              type="submit"
              className="button button-contactForm boxed-btn"
            >
              <a href="" className="btn">
                Get Start Now
              </a>
            </button>
            <button
              type="submit"
              className="button button-contactForm boxed-btn"
            >
              <a href="" className="btn">
                No thanks ! not now
              </a>
            </button>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default CreateCV;
