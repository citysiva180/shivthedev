import React from "react";

const education = () => {
  return (
    <div className="education">
      <div className="container">
        <h1>Education</h1>
        <div className="tabular">
          <table className="table">
            <thead className="tableHead">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Degree / Course</th>
                <th scope="col">Institution</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bachelor's Degree in Engineering</td>
                <td>Sri Krishna College of Technology - CBE</td>
                <td>7.2GPA</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>HighSchool</td>
                <td>Mahatma Montessori School - MDU</td>
                <td>70.3%</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Middle School</td>
                <td>Mahatma Montessori School- MDU</td>
                <td>@82.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default education;
