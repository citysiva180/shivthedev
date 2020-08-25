import React, { Component } from "react";
import "../stylesheets/forms.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="formStyler">
        <div className="container">
          <h1>It never hurts to talk!</h1>
          <p>
            Do you wish to connect with me for any queries? Please do drop in
            your contact and note, will reply you through you email. Can't wait
            to connect with you :-)
          </p>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-lg purple">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
