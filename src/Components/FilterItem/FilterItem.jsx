import { Button } from "@mui/material";
import React from "react";
import "./filteritem.css";
import ClearIcon from "@mui/icons-material/Clear";

function FilterItem(props) {
  return (
    <div className="filterItemContainer">
      <p>{props.item}</p>
      <button
        className="clear"
      >
        <ClearIcon className="clearicon"/>
      </button>
    </div>
  );
}

export default FilterItem;