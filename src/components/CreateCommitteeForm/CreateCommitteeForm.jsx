import React from "react";
import "./CreateCommitteeForm.css";
import DeleteIcon from '@mui/icons-material/Delete';

function CreateCommitteeForm() {
  return (
    <div className="container">
      <form className="committeeForm">
        <div className="rowMain1">
          <div id="row1">
            <label id="comLab">Name of the committee</label>
            <br />
            <input
              type="text"
              placeholder={"\u00A0\u00A0 Committee name"}
            />
          </div>
          <div id="row2">
            <label id="catLab">Category</label>
            <input
              type="text"
              placeholder={"\u00A0\u00A0 Academic Committee"}
            />
          </div>
        </div>

        <div id="row3">
          <label>Description</label>
          <br />
          <textarea></textarea>
        </div>

        <div id="addRow">
          <label id="memLab">Members</label>
        </div>

        <div className="rowMain">
          <div id="row4">
            <label>Name</label>
            <br />
            <select>
              <option hidden>{"\u00A0\u00A0 Select Member"}</option>
              <option>John Wick</option>
              <option>Ben Dover</option>
              <option>Jayson Staton</option>
            </select>
          </div>

          <div id="row5">
            <label>Designation</label>
            <br />
            <select>
              <option hidden>{"\u00A0\u00A0 Select Designation"}</option>
              <option>Committee Head</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
            <button><DeleteIcon id="deleteIcon" sx={{ fontSize: 24 }}/></button>
          </div>
        </div>

        <div id="row6">
          <button>New Member</button>
        </div>

        <div id="row8">
          <label>Upload document if any</label>
          <br />
          <div className="custom-file-input">
            <input type="file" id="fileInput" className="input-hidden" />
            <label htmlFor="fileInput">
              <span>📁 Select File</span>
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
