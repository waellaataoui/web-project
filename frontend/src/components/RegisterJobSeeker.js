import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../assets/img/hero/about.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export class RegisterJobSeeker extends Component {
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
                      <h2>SIgn Up</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Inscription</h2>
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
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control w-100"
                      name="Email"
                      id="firstName"
                      type="text"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'firstName'"
                      placeholder="firstName"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control w-100"
                      name="lastName"
                      id="lastName"
                      type="text"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'lastName'"
                      placeholder="lastName"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control w-100"
                      name="phonenumber"
                      id="phonenumber"
                      type="text"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'phone number'"
                      placeholder="phone number"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control w-100"
                      name="username"
                      id="username"
                      type="text"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'username'"
                      placeholder="username"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control w-100"
                      name="Email"
                      id="Email"
                      type="email"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email'"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="password"
                      id="password"
                      type="password"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'password'"
                      placeholder="password"
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    <a href="" className="btn">
                      Register
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

export default RegisterJobSeeker;
