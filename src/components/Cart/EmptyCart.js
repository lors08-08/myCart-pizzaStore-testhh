import React from "react";
import { Grid } from "@material-ui/core";
import emptyCart from "../../assets/emptyCart.png";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  bodyWrapper: {
    minHeight: "350px",
  },
}));

function EmptyCart() {
  const classes = useStyles();

  return (
    <Grid spacing={3} className={classes.bodyWrapper} item container>
      <Grid item container xs={12} justify={"center"}>
        <h1>Корзина пустая:(</h1>
      </Grid>
      <Grid item container xs={12} alignItems={"center"} justify={"center"}>
        <img alt="cart is empty" src={emptyCart} />
      </Grid>
    </Grid>
  );
}

export default EmptyCart;
