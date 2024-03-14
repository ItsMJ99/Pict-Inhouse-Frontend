import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let size = "";
      if (width >= 2560) {
        size = "large";
      } else if (width <= 1920) {
        size = "small";
      } else {
        size = "medium";
      }
      setScreenSize(size);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" Component={Home} />

          <Route path="/reports" Component={Reports} />

          <Route path="/addstaff" element={<AddStaffDetails />} />

          <Route
            path="/AddNewAcademicYear"
            element={
              <>
                <div className="header-container">
                  <AcademicYearSelection />
                  <Searchbar placeholder={"Search Committees"} name={"New +"} />
                </div>
                <AddNewAcademicYear />
              </>
            }
          />

          <Route
            path="/createcommittee"
            element={
              <>
                <div className="header-container">
                  <AcademicYearSelection />
                </div>
                {screenSize === "large" && (
                  <h3 className="headText">Create new committee</h3>
                )}
                {screenSize === "small" && (
                  <h5 className="headText">Create new committee</h5>
                )}
                {screenSize === "medium" && (
                  <h4 className="headText">Create new committee</h4>
                )}
                <CreateCommitteeForm showLastUpdated={false} />
              </>
            }
          />

          <Route
            path="/editcommittee"
            element={
              <>
                <div className="header-container">
                  <AcademicYearSelection />
                  <Searchbar placeholder={"Search Committees"} name={"New +"} />
                </div>
                <div className="committee-container">
                  <CommitteeSelector/>
                </div>
                <CreateCommitteeForm showLastUpdated={true} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
