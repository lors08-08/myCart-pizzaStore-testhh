import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Backdrop, CircularProgress, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: "550px",
    overflowY: "scroll",
    width: "100%",
    height: "120px",
    marginTop: "30px",
    flexDirection: "row",
    "& img": {
      width: "150px",
      height: "150px",
      paddingTop: "15px",
    },
  },
  itemWrapper: {
    marginTop: "25px",
  },
  add: {
    border: "2px solid #FE5F1E",
    borderRadius: "10px",
    padding: "5px 10px",
    "&:hover": {
      boxShadow: "0 0 10px #FE5F1E",
      cursor: "pointer",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "#6b6b6b2e",
  },
}));

function Menu({ menu }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const addingItem = useSelector((state) => state.cart.addingItem);

  return (
    <Grid className={classes.wrapper} item container>
      <Grid item xs={12}>
        <h1>Также советуем:</h1>
      </Grid>
      {menu.map((item) => {
        return (
          <Grid
            key={item.id}
            className={classes.itemWrapper}
            item
            container
            xs={4}
          >
            <Grid item container justify={"flex-end"} xs={12}>
              <b
                onClick={() => dispatch(addItem(item.id))}
                className={classes.add}
              >
                Добавить в корзину
              </b>
            </Grid>
            <Grid item container justify={"center"} xs={12}>
              <img alt="pizza" src={item.src} />
            </Grid>
            <Grid item container justify={"center"} xs={12}>
              <h2>{item.name}</h2>
            </Grid>
            <Grid item container justify={"center"} xs={12}>
              <b>{item.price}₽</b>
            </Grid>
          </Grid>
        );
      })}
      <Backdrop className={classes.backdrop} open={addingItem}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </Grid>
  );
}

export default Menu;
