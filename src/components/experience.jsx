import React from "react";
import "../stylesheets/experience.css";
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent,
} from "react-collapsible-component";

export default class Experience extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <h1>Experience</h1>
        <CollapsibleComponent>
          <CollapsibleHead className="additionalClassForHead">
            Systems Engineer - Cognizant - Feb 2017 to Feb -2018
          </CollapsibleHead>
          <CollapsibleContent className="additionalClassForContent">
            <p>
              {" "}
              <b>About the Project : </b>Cognizant Infrastructure Systems is a
              subset of Cognizant where they provide global level Infrastructure
              services such as Integrated Salesforce CRM Support services, Cloud
              and IT Automation etc. The role includes the below
              responasibilities responsibilities
            </p>
            <ul>
              <li>
                {" "}
                Got trained in Customer Service Supporting, Tone of Voice and
                Probing
              </li>
              <li>
                Trained in Basic Cloud Computing concepts such as scalability
                and
              </li>
              <li>
                Follow and comply to defined ITIL- Health Check- Floor
                Management processes
              </li>
              <li>
                Provide regular and meaningful updates and communications to
                client- stakeholders and Team Lead/management
              </li>
            </ul>
          </CollapsibleContent>

          <CollapsibleHead isExpanded={true}>
            Senior Systems Engineer - Cognizant - March - 2018 to March - 2019{" "}
          </CollapsibleHead>
          <CollapsibleContent isExpanded={true}>
            <p>
              <b>About the Project : </b>Cognizant Infrastructure Systems is a
              subset of Cognizant where they provide global level Infrastructure
              services such as Integrated Salesforce CRM Support services, Cloud
              and IT Automation etc. The role includes the below
              responasibilities responsibilities
            </p>
            <ul>
              <li>
                {" "}
                Responsible for in-scope Event Mgmt.- Request Mgmt.- Incident
                Mgmt.- (First level resolution and triaging) proactive problem
                management (for PA level only) as per the defined guidelines and
                instructions in the SOPs/Run books
              </li>
              <li>
                Responsible for Access Management and standard change execution
              </li>
              <li>
                Follow and comply to defined ITIL- Health Check- Floor
                Management processes
              </li>
              <li>
                Provide regular and meaningful updates and communications to
                client- stakeholders and Team Lead/management
              </li>
            </ul>
          </CollapsibleContent>

          <CollapsibleHead>
            Quality Assurance Engineer - June 2019 to Present
          </CollapsibleHead>
          <CollapsibleContent>
            <p>
              <b> About the Project:</b> Emblem Health is one of the leading
              healthcare service in the United States. Situated in New York. The
              project deals with working with developing and testing
              applications for managing clients.
            </p>
            <ul>
              <li>
                {" "}
                <b> Design and Development :</b> Review test scripts prepared by
                test engineer for various scenarios and validate same, as
                required
              </li>
              <li>
                {" "}
                <b> Test Design : </b>Designing and Writing reusable Test Cases
                which are further subjected to review by Test leads
              </li>
              <li>
                {" "}
                <b>Test Development : </b>Based on signed off test scenarios,
                identify test data; Create test cases based on the understanding
                of the requirements and ensure the test coverage;
              </li>
              <li>
                <b> Test Execution :</b> Utilizations of Selenium python web
                driver and execution of automated tests. Results are documented
                in HP ALM where cases are passed or Failed post review.
              </li>
              <li>
                <b> Defects Management: </b>Raising Defects and following the
                defect management lifecycle there by sharing defects to the
                Developers.
              </li>
              <li>
                <b> Audit : </b>Auditing test cases and updating and sharing
                audit artifacts for leads for references
              </li>
              <li>
                <b> Knowledge Transfer : </b>Support in maintaining the CoE
                website; Collect and present technical artefacts on performance
                and scalability from various sources;
              </li>
            </ul>{" "}
          </CollapsibleContent>
        </CollapsibleComponent>
      </div>
    );
  }
}
