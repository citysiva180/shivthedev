import React from "react";
import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="page-footer font-small purple pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Attributions</h5>
              <p>
                I sincerely thank Font Awesome Team for sharing awesome SVG
                ICONS
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">
                About Shivthedev
              </h5>
              <p>
                Shivthedev was a longtime project which was in mind but required
                skilling to implement. I sincerely thank all my online teachers,
                Mosh Hamedani, Brad, Colt, Caleb and everyone for sharing their
                skills out of good will .
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://shivthedev.com/"> ShivTheDev.tech</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
