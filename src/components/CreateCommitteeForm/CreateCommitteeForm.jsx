import React, { useState } from "react";
import "./CreateCommitteeForm.css";
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';

function CreateCommitteeForm() {
  const [rowCount, setRowCount] = useState([]);
  const [nextRowId, setNextRowId] = useState(1);
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const crem=150-description.length;

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
      <form className="committeeForm">
        <div className="rowMain1">
          <div id="row1">
            <label id="comLab">Name of the committee</label>
            <br />
            <input
              type="text"
              placeholder={"Committee name"}
            />
          </div>
          <div id="row2">
            <label id="catLab">Category</label>
            <input
              type="text"
              placeholder={"Academic Committee"}
            />
          </div>
        </div>

        <div id="row3">
          <label>Description</label>
          <br />
          <textarea maxlength="150" id="desc" onChange={handleDescriptionChange}></textarea>
          <label>Characters Remaining : {crem}</label>
        </div>

        <div id="addRow">
          <label id="memLab">Members</label>
        </div>

        {rowCount.map(rowId => (
          <div className="rowMain" key={rowId}>
            <div id="row4">
              <input list={`nameList${rowId}`} placeholder="Name"/>
              <datalist id={`nameList${rowId}`}>
                <option value="John Wick" />
                <option value="Ben Dover" />
                <option value="Jayson Staton" />
              </datalist>
            </div>

            <div id="row5">
              <input list={`designationList${rowId}`} placeholder="Designation"/>
              <datalist id={`designationList${rowId}`}>
                <option value="Committee Head" />
                <option value="Marketing" />
                <option value="Finance" />
              </datalist>
              <button className="delStaffRowBtn" onClick={() => deleteRowMain(rowId)}><DeleteIcon className="deleteIcon" sx={{ fontSize: 24 }}/></button>
            </div>
          </div>
        ))}

        <div id="row6">
          <button onClick={addRowMain}>New Member</button>
        </div>

        <div id="row8">
          <label>Upload document if any</label>
          <br />
          <div className="custom-file-input">
            <input type="file" id="fileInput" className="input-hidden" accept=".pdf"/>
            <label htmlFor="fileInput">
              <span><FolderIcon className="FolderIcon"/> Select File</span>
            </label>
          </div>
        </div>

        <div id="row9">
          <button type="reset" id="btnReset">
            Reset
          </button>
          <button id="btnCancel">Cancel</button>
          <button id="btnSave">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CreateCommitteeForm;
