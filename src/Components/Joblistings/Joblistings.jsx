import { Container } from "@mui/material";
import React from "react";
import Jobcard from "../JobCard/Jobcard";
import "./joblistings.css";
import { data } from "../../data.js";
import { useState } from "react";



function Joblistings(props) {


  return (
    <div className="mainContainer">
      <Container>
        {data && data.map((item, index) => {
          return (
            <Jobcard
              key={item.id}
              img={item.logo}
              company={item.company}
              title={item.position}
              one={item.postedAt}
              two={item.contract}
              three={item.location}
              itemNew={item.new}
              itemFeatured={item.featured}
              languages={item.languages}
              tools={item.tools}
              role={item.role}
              level={item.level}
              indexNumber={index}
            />
          );
        })}
        <Jobcard />
      </Container>
    </div>
  );

}

export default Joblistings;
