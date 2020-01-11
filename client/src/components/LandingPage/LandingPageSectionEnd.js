import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  root: {
    paddingTop: "6em",
    paddingBottom: "6em",
    textAlign: "center",
    margin: "0 auto"
  },
  startButton: {
    display: "inline-block",
    background: "#a7c539",
    color: "#002e6d",
    lineHeight: 1,
    fontSize: "25px",
    fontWeight: "bold",
    padding: "20px 55px 20px 55px",
    border: 0,
    textAlign: "center",
    marginTop: "40px",
    "-webkit-border-radius": "5px",
    "-ms-border-radius": "5px",
    "-moz-border-radius": "5px",
    "-o-border-radius": "5px",
    borderRadius: "5px"
  }
});

const LandingPageSectionEnd = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 style={{ fontSize: 55, fontWeight: 800 }}>
        Preparing for a new project?
      </h2>
      <p style={{ fontSize: 28, fontWeight: 400 }}>
        Let us help you get started right.
      </p>
      <Link to="/calculation" className={classes.startButton}>
        Get Started
      </Link>
    </div>
  );
};

export default LandingPageSectionEnd;