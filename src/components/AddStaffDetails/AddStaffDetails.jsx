import React, { useState } from 'react';
import StaffInfoRow from "../MiniComponents/StaffInfoRow/StaffInfoRow.jsx";
import StaffInfo from "../MiniComponents/StaffInfoRow/StaffInfo.js";
import { BiSearch } from 'react-icons/bi'; 
import { BsUpload } from 'react-icons/bs'
import "./AddStaffDetails.css";

function StaffDetails() {
    const [showAddFaculty, setShowAddFaculty] = useState(false);

    const toggleAddFaculty = () => {
        setShowAddFaculty(!showAddFaculty);
    };

    return (
        <div className="addstaff-container">
            <div className="row mb-3">
                <div className="col">
                    <div className="d-flex align-items-center">
                        <div className="blank-bar bg-primary rounded" />
                        <h1 className="ms-3 mb-0">Staff Details</h1>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="d-flex align-items-center">
                        <div className="searchStaff position-relative me-3">
                            <input type="text" placeholder="Search Staff" className="form-control" />
                            <BiSearch className="searchIcon position-absolute top-50 start-0 translate-middle-y" />
                        </div>
                        <button className="addStaffBtn btn btn-primary" onClick={toggleAddFaculty}>New Staff +</button>
                    </div>
                </div>
            </div>

            <div className={`addFaculty ${showAddFaculty ? 'open' : ''}`}>
                <div className="facultyImageAdd">
                    <input type="file" id="fileInput" className="input-hidden" accept=".png, .jpg, .jpeg"/>
                    <label htmlFor="fileInput" className="d-flex align-items-center btn btn-light">
                        <span className="uploadIconContainer">Image<BsUpload className="ms-1" /></span>
                    </label>
                </div>
                <input type="text" className="form-control facultyNameAdd" placeholder="Enter faculty name" />
                <input type="text" className="form-control facultyEducationAdd" placeholder="Enter faculty education / caption" />
                <input type="text" className="form-control facultySocialAdd" placeholder="social link" />
                <button className="saveAddBtn btn btn-success" onClick={toggleAddFaculty}>Save</button>
                <button className="cancelAddBtn btn btn-danger" onClick={toggleAddFaculty}>Cancel</button>
            </div>

            {StaffInfo.length > 0 ? (
                <table id="staffTable" className="table">
                    <thead>
                        <tr className="columnHeading">
                            <th></th>
                            <th>Faculty Name</th>
                            <th>Education</th>
                            <th>LinkedIn</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {StaffInfo.map(staffMember => (
                            <StaffInfoRow
                                key={staffMember.id}
                                img={staffMember.img}
                                name={staffMember.name}
                                education={staffMember.education}
                                social={staffMember.social}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="noRecordMessage text-center">No Record Found !!!</div>
            )}
        </div>
    );
}

export default StaffDetails;
