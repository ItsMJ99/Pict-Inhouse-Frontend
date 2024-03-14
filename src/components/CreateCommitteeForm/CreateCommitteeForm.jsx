import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import "./CreateCommitteeForm.css";
import { Link } from "react-router-dom";

const StaffInfo = [
  { id: "1", img: require("../../assets/john.jpg"), name: "John yein doe", education: "PHD, B.tech,....", social: "http://www.linkedin.com"},
  { id: "2", img: require("../../assets/john.jpg"), name: "John wick", education: "PHD, B.tech,....", social: "http://www.linkedin.com" },
  { id: "3", img: require("../../assets/john.jpg"), name: "Geek Kid", education: "PHD, B.tech,....", social: "http://www.linkedin.com" },
  { id: "4", img: require("../../assets/john.jpg"), name: "Striver", education: "PHD, B.tech,....", social: "http://www.linkedin.com" },
  { id: "5", img: require("../../assets/john.jpg"), name: "John Cena", education: "PHD, B.tech,....", social: "http://www.linkedin.com" },
  { id: "6", img: require("../../assets/john.jpg"), name: "Da Vinci Resolve", education: "PHD, B.tech,....", social: "http://www.linkedin.com" },
  { id: "7", img: require("../../assets/john.jpg"), name: "Jacob Elordi", education: "PHD, B.tech,....", social: "http://www.linkedin.com" },
  { id: "8", img: require("../../assets/john.jpg"), name: "Jenny James", education: "PHD, B.tech,....", social: "http://www.linkedin.com" },
];

const Designations = [
  {id: "1",designation:"Elevate Head"},
  {id: "2",designation:"Elevate Volunteer"},
  {id: "3",designation:"PDA Head"},
  {id: "4",designation:"PDA Volunteer"}, 
  {id: "5",designation:"INC Head"},
  {id: "6",designation:"INC Volunteer"},
];

function CreateCommitteeForm(props) {

  const LastUpdated=props.showLastUpdated;
  const [rowCount, setRowCount] = useState([]);
  const [nextRowId, setNextRowId] = useState(1);
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const crem = 150 - description.length;

  const addRowMain = (event) => {
    event.preventDefault();
    setRowCount([...rowCount, nextRowId]);
    setNextRowId(nextRowId + 1);
  };

  const deleteRowMain = (id) => {
    setRowCount(rowCount.filter(rowId => rowId !== id));
  };

  return (
    <div className="committee-container">
      <Form className="committeeForm">
        <div className="rowMain1">
          <div id="row1">
            <Form.Label>Name of the committee</Form.Label>
            <Form.Control type="text" placeholder="Committee name" />
          </div>
          <div id="row2">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Academic Committee" />
          </div>
        </div>

        <div id="row3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" maxLength="150" id="desc" onChange={handleDescriptionChange} />
          <Form.Text className="characters-remaining">Characters Remaining : {crem}</Form.Text>
        </div>

        <div id="addRow">
          <Form.Label>Members</Form.Label>
        </div>

        {rowCount.map(rowId => (
          <div className="rowMain" key={rowId}>
            <div id="row4">
              <Form.Control list={`nameList${rowId}`} placeholder="Name" />
              <datalist id={`nameList${rowId}`}>
              {StaffInfo.map(staffMember => (
              <option key={staffMember.id} value={staffMember.name} />
              ))}
              </datalist>
            </div>

            <div id="row5">
              <Form.Control list={`designationList${rowId}`} placeholder="Designation" />
              <datalist id={`designationList${rowId}`}>
                {Designations.map((ref)=>(
                  <option key={ref.id} value={ref.designation}/>
              ))}
              </datalist>
              <Button variant="danger" className="delStaffRowBtn" onClick={() => deleteRowMain(rowId)}><DeleteIcon /></Button>
            </div>
          </div>
        ))}

        <div id="row6">
          <Button onClick={addRowMain}>New Member</Button>
        </div>

        <div id="row8">
          <Form.Label className="Upload-Doc">Upload document if any</Form.Label>
          <div className="custom-file-input">
            <Form.Control type="file" id="fileInput" className="input-hidden" accept=".pdf" />
            <Form.Label htmlFor="fileInput">
              <span><FolderIcon className="FolderIcon" sx={{ fontSize: 20 }} /> Select File</span>
            </Form.Label>
          </div>
        </div>

        <div id="row9">
        {LastUpdated && <p>Last Edited : DD MMM YYYY HH:MM:SS</p>}
          <Button type="reset" id="btnReset">Reset</Button>
          <Link to={"/home"} >
          <Button id="btnCancel">Cancel</Button>
          </Link>
          <Button id="btnSave">Save</Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateCommitteeForm;
