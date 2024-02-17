import React from "react";
import "./StaffInfoRow.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function StaffInfoRow(props) {
  return (
    <tr className="staffRow">
      <td className="col1">
        <img src={props.img} alt={`${props.name}-Photo`} />
      </td>
      <td className="col2">{props.name}</td>
      <td className="col3">{props.education}</td>
      <td className="col4">
        <a href={props.social}>
          <LinkedInIcon />
          LinkedIn Profile
        </a>
      </td>
      <td className="col5">
        <button className="editBtn">
          Edit <EditIcon className="editIcon" sx={{ fontSize: 20 }} />
        </button>
      </td>
      <td className="col6">
        <button className="deleteBtn">
          Delete <DeleteIcon className="deleteIcon" sx={{ fontSize: 20 }}/>
        </button>
      </td>
    </tr>
  );
}

export default StaffInfoRow;
