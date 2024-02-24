import React, { useEffect, useState } from 'react';
import StaffInfoRow from "../MiniComponents/StaffInfoRow/StaffInfoRow.jsx";
import StaffInfo from "../MiniComponents/StaffInfoRow/StaffInfo.js";
import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import "./AddStaffDetails.css";

function StaffDetails() {
    const [showAddFaculty, setShowAddFaculty] = useState(false);

    const toggleAddFaculty = () => {
        setShowAddFaculty(!showAddFaculty);
    };

    return (
        <div className="container">
            <div className="staff-title">
                <div className="blank-bar" />
                <h1>Staff Details</h1>
            </div>
            <div id="searchStaffRow">
                <div className="searchStaff">
                    <input type="text" placeholder="Search Staff" />
                    <SearchIcon className="searchIcon" />
                </div>
                <button className="addStaffBtn" onClick={toggleAddFaculty}>New Staff +</button>
            </div>

            <div className={`addFaculty ${showAddFaculty ? 'open' : ''}`}>
                <div className="facultyImageAdd">
                    <input type="file" id="fileInput" className="input-hidden" accept=".png, .jpg, .jpeg"/>
                    <label htmlFor="fileInput">
                    <span className="uploadIconContainer">            
                        Image<UploadIcon id="uploadImgIcon" sx={{ fontSize: 20 }} />
                    </span>
                    </label>
                </div>
                <input type="text" className="facultyNameAdd" placeholder="Enter faculty name" />
                <input type="text" className="facultyEducationAdd" placeholder="Enter faculty education / caption" />
                <input type="text" className="facultySocialAdd" placeholder="social link" />
                <button className="saveAddBtn" onClick={toggleAddFaculty}>Save</button>
                <button className="cancelAddBtn" onClick={toggleAddFaculty}>Cancel</button>
            </div>

            {StaffInfo.length > 0 ? (
                <table id="staffTable">
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
                <div className="noRecordMessage">No Record Found !!!</div>
            )}
        </div>
    );
}

export default StaffDetails;
