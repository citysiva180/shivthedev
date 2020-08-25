import React, { Component } from "react";
import "../stylesheets/forms.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="formStyler">
        <div className="container">
          <h1 style={{ color: "purple", fontFamily: "'Oswald', sans-serif" }}>
            It never hurts to talk!
          </h1>
          <p>
            Do you wish to connect with me for any queries? Please do drop in
            your contact and note, will reply you through email. Can't wait to
            connect with you :-)
          </p>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1" style={{ color: "purple" }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                I'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label
                for="exampleFormControlTextarea1"
                style={{ color: "purple" }}
              >
                Share something wise ...
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Would you like me to develop a website for you?
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-lg purple"
              style={{ color: "white", backgroundColor: "purple" }}
            >
              Letz Go..!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
