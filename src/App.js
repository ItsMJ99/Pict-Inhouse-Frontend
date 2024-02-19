import logo from './logo.svg';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.js";
import AddStaffDetails from "./components/AddStaffDetails/AddStaffDetails.jsx";
import CreateCommitteeForm from "./components/CreateCommitteeForm/CreateCommitteeForm.jsx";
import Searchbar from "./components/MiniComponents/Searchbar/Searchbar.jsx";
import AcademicYearSelection from "./components/MiniComponents/AcademicYearSelection/AcademicYearSelection.jsx";
import CommitteeSelector from "./components/MiniComponents/CommitteeSelector/CommitteeSelector.jsx";
import Home from "./Pages/Home";
import Reports from "./Pages/Reports";

function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" Component={Home} />

            <Route path="/reports" Component={Reports} />

            <Route path="/addstaff" element={
              <AddStaffDetails />
            }/>

            <Route path="/createcommittee" element={
              <>
              <div className="header-container">
              <AcademicYearSelection />
              </div>
              <h2 className="headText">Create new committee</h2>
              <CreateCommitteeForm />
              </>
            }/>

            <Route path="/addnewacademicyear" element={
              <div>
                <div className="header-container">
                  <AcademicYearSelection />
                  <Searchbar placeholder={"\u00A0\u00A0 Search Committees"} name={"New +"}/>       
                </div>
                  <div className='noCommittees'>
                    <h1 >No committies added for academic year 2023-2024</h1>
                    <h2>create one by click on new &gt; committee or by simply copying all the last year committee data</h2>
                    <button>Copy last year committees</button>
                  </div>
              </div>

            }/>

            <Route path="/editcommittee" element={
              <>
                <div className="header-container">
                <AcademicYearSelection />
                <Searchbar placeholder={"\u00A0\u00A0 Search Committees"} name={"New +"}/>
                </div>
                <div className="committee-container">
                <CommitteeSelector />
                </div>
                <CreateCommitteeForm />
              </>
            }/>

          </Routes>
        </Router>
    </div>
  );
}


export default App;
