import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../store/authSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    // todo: logout user before loggin in again

    try {
      const res = await axios.post("/login/jobseeker", {
        username: email,
        password,
      });
      dispatch(setUser(res.data.user));
      history.push("/");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  };
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
                      <h2>Sign In</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Authentication</h2>
          </div>
          <hr />
          <div className="col-lg-8">
            <form
              onSubmit={submit}
              className="form-contact contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              {error && <p> {error} </p>}
              <div className="col-12">
                <div className="form-group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
                    Login
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
};
export default Login;
