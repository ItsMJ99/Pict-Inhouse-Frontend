import React, { useState } from 'react';
import StaffInfoRow from "../MiniComponents/StaffInfoRow/StaffInfoRow.jsx";
import StaffInfo from "../MiniComponents/StaffInfoRow/StaffInfo.js";
import "./AddStaffDetails.css";

function StaffDetails() {
    const [showAddFaculty, setShowAddFaculty] = useState(false);

    const toggleAddFaculty = () => {
        setShowAddFaculty(!showAddFaculty);
    };

    return (
        <div className="container">
            <div className="title">
                <div className="blank" />
                <h1>Staff Details</h1>
            </div>
            <div >
                <input type="text" className="searchStaff" placeholder="&#x1F50D; Search Staff" />
                <button className="addStaffBtn" onClick={toggleAddFaculty}>New Staff +</button>
            </div>

            <div className={`addFaculty ${showAddFaculty ? 'open' : ''}`}>
                <input type="file" accept=".png, .jpg, .jpeg" className="facultyImageAdd" />
                <input type="text" className="facultyNameAdd" placeholder="Enter faculty name" />
                <input type="text" className="facultyEducationAdd" placeholder="Enter faculty education / caption" />
                <input type="text" className="facultySocialAdd" placeholder="social link" />
                <button className="cancelAddBtn" onClick={toggleAddFaculty}>Cancel</button>
            </div>

            {StaffInfo.length > 0 ? (
                <table>
                    <thead>
                        <tr className="columnHeading">
                            <th></th>
                            <th>Faculty Name</th>
                            <th>Education</th>
                            <th>LinkedIn / Social Link</th>
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
