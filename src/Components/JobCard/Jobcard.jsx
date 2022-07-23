import { Card, CardContent } from "@mui/material";
import React from "react";
import "./jobcard.css";

function Jobcard({jobs}, props) {

  function clickFilterItem(event) {
    console.log("i am clicked");
  }


  return (
    <>
    {jobs.map((job) => {
      return (
      <Card
      key = {job.id}
      className={props.indexNumber < 2 && "card"}
      sx={{ margin: { xs: "60px 0", md: "20px 0" }, overflow: "visible" }}
    >
      <CardContent className="cardcontent">
        <div className="logoAndTextWrapper">
          <img src={job.logo} alt="company logo" />
          <div className="jobInfo">
            <div className="titleInfo">
              <p className="companyTitle">{job.company}</p>
              {job.new && <p className="new">NEW!</p>}
              {job.featured && <p className="featured">FEATURED</p>}
            </div>
            <p className="jobtitle">{job.position}</p>
            <p className="shorts">
              {job.postedAt} &nbsp; · &nbsp; {job.contract} &nbsp; · &nbsp;
              {job.location}
            </p>
          </div>
        </div>
        <div className="icontexts">
          {job.languages.length > 0 &&
            job.languages.map((item, index) => {
              const randomNumber = Math.random() * (100000 - 20) + 20;
              return (
                <p
                  key={randomNumber}
                  className="icon"
                  onClick={clickFilterItem}
                >
                  {item}
                </p>
              );
            })}
        </div>
      </CardContent>
    </Card>
      )
      
    }) }
    </>
  );
}
export default Jobcard;
