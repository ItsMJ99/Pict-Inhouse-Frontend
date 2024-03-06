import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AcademicYearSelection from '../MiniComponents/AcademicYearSelection/AcademicYearSelection.jsx';
import Searchbar from '../MiniComponents/Searchbar/Searchbar.jsx';
import "./AddNewAcademicYear.css";

function AddNewAcademicYear() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="top-row d-flex flex-wrap justify-content-between align-items-center">
            <AcademicYearSelection />
            <Searchbar
              placeholder={"  Search Committees"}
              name={"New +"}
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="noCommittees text-center">
            <h1>No committees added for academic year 2023-2024</h1>
            <h3>
              Create one by clicking on "New &gt; Committee" or by
              simply copying all the last year committee data
            </h3>
            <button className="btn btn-primary">
              Copy last year committees
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewAcademicYear;
