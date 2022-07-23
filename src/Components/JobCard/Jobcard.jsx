import { Card, CardContent } from "@mui/material";
import React from "react";
import "./jobcard.css";

function Jobcard(props) {
  let itemsArray = [props.role];
  itemsArray.push(props.level);
  itemsArray = itemsArray.concat(props.tools);
  itemsArray = itemsArray.concat(props.languages);

  itemsArray = itemsArray.filter((item) => {
    return typeof item === "string";
  });


  function handleClickEvent(event) {
    event.currentTarget.classList.toggle('activeBackground');
    const whichClicked = event.target.innerText;
  }

  return (
    <Card
      className={props.indexNumber < 2 && "card"}
      sx={{ margin: { xs: "60px 0", md: "20px 0" }, overflow: "visible" }}
    >
      <CardContent className="cardcontent">
        <div className="logoAndTextWrapper">
          <img src={props.img} alt="company logo" />
          <div className="jobInfo">
            <div className="titleInfo">
              <p className="companyTitle">{props.company}</p>
              {props.itemNew && <p className="new">NEW!</p>}
              {props.itemFeatured && <p className="featured">FEATURED</p>}
            </div>
            <p className="jobtitle">{props.title}</p>
            <p className="shorts">
              {props.one} &nbsp; · &nbsp; {props.two} &nbsp; · &nbsp;
              {props.three}
            </p>
          </div>
        </div>
        <div className="icontexts">
          {itemsArray.length > 0 &&
            itemsArray.map((item, index) => {
              const randomNumber = Math.random() * (100000 - 20) + 20;
              return (
                <p
                  key={randomNumber}
                  onClick={handleClickEvent}
                  className="icon"
                >
                  {item}
                </p>
              );
            })}
        </div>
      </CardContent>
    </Card>
  );
}
export default Jobcard;
