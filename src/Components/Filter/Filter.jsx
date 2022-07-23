import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
} from "@mui/material";
import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./filter.css";

function Filter() {
  return (
    <Container className="filterContainer">
      <Card className="cardFilter">
        <CardContent className="cardcontent">
          <div className="filterItemWrapper">
            <FilterItem item={"Frontend"} />
            <FilterItem item={"Fullstack"} />
          </div>

          <Button
            variant="text"
            sx={{
              color: "custom.darkGrayCyan",
              fontWeight: "700",
              fontFamily: "League Spartan",
            }}
          >
            Clear
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Filter;
