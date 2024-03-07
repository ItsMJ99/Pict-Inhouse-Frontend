import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.css";
import AddNewAcademicYear from "./components/AddNewAcademicYear/AddNewAcademicYear.jsx";
import Navbar from "./components/Navbar/Navbar.js";
import AddStaffDetails from "./components/AddStaffDetails/AddStaffDetails.jsx";
import CreateCommitteeForm from "./components/CreateCommitteeForm/CreateCommitteeForm.jsx";
import Searchbar from "./components/MiniComponents/Searchbar/Searchbar.jsx";
import AcademicYearSelection from "./components/MiniComponents/AcademicYearSelection/AcademicYearSelection.jsx";
import CommitteeSelector from "./components/MiniComponents/CommitteeSelector/CommitteeSelector.jsx";
import Home from "./components/Home/Home.jsx";
import Reports from "./components/Reports/Reports.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/home" Component={Home} />

          <Route path="/reports" Component={Reports} />

          <Route path="/addstaff" element={<AddStaffDetails />} />

          <Route
            path="/createcommittee"
            element={
              <>
                <div className="header-container">
                  <AcademicYearSelection />
                </div>
                <h4 className="headText">Create new committee</h4>
                <CreateCommitteeForm />
              </>
            }
          />

          <Route
            path="/AddNewAcademicYear"
            element={
              <AddNewAcademicYear/>
            }
          />

          <Route
            path="/editcommittee"
            element={
              <>
                <div className="header-container">
                  <AcademicYearSelection />
                  <Searchbar
                    placeholder={"Search Committees"}
                    name={"New +"}
                    id="ec-searchBarBtn"
                  />
                </div>
                <div className="committee-container">
                  <CommitteeSelector />
                </div>
                <CreateCommitteeForm />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
