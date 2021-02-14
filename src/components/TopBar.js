import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Grid } from "@material-ui/core";
import LocalPizzaOutlinedIcon from "@material-ui/icons/LocalPizzaOutlined";

const useStyles = makeStyles(() => ({
  header: {
    fontSize: "3em",
    textAlign: "center",
    fontFamily: "Oswald",
    borderBottom: "1px solid #FFDF8C",
    paddingBottom: "10px",
    letterSpacing: "5px",
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <Grid className={classes.header} container justify={"center"}>
      <Grid item xs={12}>
        <LocalPizzaOutlinedIcon fontSize={"large"} />
      </Grid>
      <Grid item xs={12}>
        MyCart
      </Grid>
    </Grid>
  );
}

export default TopBar;
