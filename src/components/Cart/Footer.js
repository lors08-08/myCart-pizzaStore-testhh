import React from "react";
import { Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import OrderSucceed from "../OrderSucceed";

const useStyles = makeStyles(() => ({
  footerWrapper: {
    marginTop: "3em",
    padding: "10px 0",
  },
  items: {
    fontSize: "1em",
    fontFamily: "Oswald",
    letterSpacing: "3px",
    "& span": {
      fontSize: "1.5em",
    },
  },
  priceTotal: {
    fontSize: "1em",
    fontFamily: "Oswald",
    letterSpacing: "3px",
    "& span": {
      fontSize: "1.5em",
      color: "#FE5F1E",
    },
  },
  btnBack: {
    borderRadius: "30px",
    padding: "20px 30px",
    background: "#FFFFFF",
    color: "#D3D3D3",
    border: "1px solid #D3D3D3",
    width: "250px",
  },
  btnConfirm: {
    borderRadius: "30px",
    padding: "10px 30px",
    background: "#FE5F1E",
    color: "white",
    border: "none",
    width: "250px",
    height: "60px",
    cursor: "pointer",
    transition: "0.3s",
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      fontSize: "1.5em",
      transition: "0.3s",
    },
  },
}));

function Footer({ cartItems }) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  return (
    <>
      <Grid
        item
        container
        className={classes.footerWrapper}
        justify={"space-between"}
        xs={12}
      >
        <Grid item container alignItems={"center"} xs={4}>
          <div className={classes.items}>
            Всего пицц: <span>{cartItems.length} шт</span>.
          </div>
        </Grid>
        <Grid item container justify={"flex-end"} alignItems={"center"} xs={4}>
          <div className={classes.priceTotal}>
            Сумма заказа:{" "}
            <span>{cartItems.reduce((a, t) => a + t.details.price, 0)} ₽</span>
          </div>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.footerWrapper}
        justify={"space-between"}
        xs={12}
      >
        <Grid item container alignItems={"center"} xs={4}>
          <button className={classes.btnBack}>Вернуться в каталог</button>
        </Grid>
        <Grid item container justify={"flex-end"} alignItems={"center"} xs={4}>
          <button className={classes.btnConfirm} onClick={() => setOpen(true)}>
            Оплатить сейчас
          </button>
        </Grid>
      </Grid>
      <OrderSucceed onClose={() => setOpen(false)} open={open} />
    </>
  );
}

export default Footer;
