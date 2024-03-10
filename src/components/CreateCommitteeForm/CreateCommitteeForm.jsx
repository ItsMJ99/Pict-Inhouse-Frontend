import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import "./CreateCommitteeForm.css";


function CreateCommitteeForm() {
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
                <option value="John Wick" />
                <option value="Ben Dover" />
                <option value="Jayson Staton" />
              </datalist>
            </div>

            <div id="row5">
              <Form.Control list={`designationList${rowId}`} placeholder="Designation" />
              <datalist id={`designationList${rowId}`}>
                <option value="Committee Head" />
                <option value="Marketing" />
                <option value="Finance" />
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
          <Button type="reset" id="btnReset">Reset</Button>
          <Button id="btnCancel">Cancel</Button>
          <Button id="btnSave">Save</Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateCommitteeForm;
