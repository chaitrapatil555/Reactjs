import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import { NavLink } from "react-router-dom";
import './AppBar.css';
// react.school/material-ui

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:0.1
  },
  
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

export default function Appbardemo() {
  const classes = useStyles();
  const [example, setExample] = useState("secondary");
  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";
  return (
    <React.Fragment>
      <AppBar
        color={isCustomColor || isCustomHeight ? "primary" : example}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <NavLink className="myNav" style={{'color':'black'}} to="/students/showall">Show Students</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <NavLink className="myNav" style={{'color':'black'}} to="/students/add">Add Student</NavLink>
          </Typography>
           </Toolbar>
      </AppBar>
      <Toolbar />
      
    </React.Fragment>
  );
}