import React from "react";
import { Grid } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useDispatch } from "react-redux";
import { deleteAllItems } from "../../redux/actions";

const useStyles = makeStyles(() => ({
  cartWrapper: {
    marginTop: "3em",
    borderBottom: "1px solid #e3e3e3",
    padding: "10px 0",
  },
  cart: {
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "Oswald",
  },
  clearCart: {
    fontSize: "1em",
    fontFamily: "Oswald",
  },
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid
      item
      container
      className={classes.cartWrapper}
      justify={"space-between"}
      xs={12}
    >
      <Grid item container alignItems={"center"} xs={4}>
        <ShoppingCartOutlinedIcon fontSize={"large"} />
        <div className={classes.cart}>Корзина</div>
      </Grid>
      <Grid item container justify={"flex-end"} alignItems={"center"} xs={4}>
        <DeleteForeverOutlinedIcon fontSize={"large"} />
        <div
          className={classes.clearCart}
          onClick={() => dispatch(deleteAllItems())}
        >
          Очистить корзину
        </div>
      </Grid>
    </Grid>
  );
}

export default Header;
