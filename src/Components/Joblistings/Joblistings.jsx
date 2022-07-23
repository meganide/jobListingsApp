import { Container } from "@mui/material";
import React from "react";
import Jobcard from "../JobCard/Jobcard";
import "./joblistings.css";
import { data } from "../../data.js";
import { useState } from "react";

function Joblistings(props) {
  // Manage the state of our data
  const [jobs, setJobs] = useState(data);

  return (
    <div className="mainContainer">
      <Container>
        <Jobcard jobs={jobs}/>
      </Container>
    </div>
  );
}

export default Joblistings;
