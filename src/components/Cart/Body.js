import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Backdrop, CircularProgress, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { deleteItem } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  bodyWrapper: {
    maxHeight: "750px",
    minHeight: "350px",
    overflowY: "scroll",
  },
  itemWrapper: {
    marginTop: "50px",
    width: "100%",
    height: "120px",
    "& img": {
      width: "100%",
      height: "150px",
      paddingTop: "15px",
    },
    "& span": {
      fontSize: "3.5em",
      color: "#FE5F1E",
      cursor: "pointer",
    },
  },
  amount: {
    color: "#000 !important",
    padding: "0 5px",
    fontFamily: "Oswald",
    cursor: "default !important",
  },
  delete: {
    color: "red",
    cursor: "pointer",
    transition:"0.2s",
    "&:hover": {
      fontSize:"3em",
      transition:"0.2s"
    }
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "#6b6b6b2e",
  },
}));

function Body({ cartItems }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const deletingItem = useSelector((state) => state.cart.deletingItem);

  const [counter, setCounter] = useState(1);
  const handleIncrement = () => {
    if (counter < 99) {
      setCounter(counter + 1);
    } else {
      alert("Слишком много пицц!");
    }
  };
  const handleDecrement = () => {
    if (counter >= 2) {
      setCounter(counter - 1);
    } else {
      alert("В корзине должна быть хотя-бы одна пицца!");
    }
  };
  const handleDelete = (id) => {
    if(window.confirm("Вы уверены?")) {
      dispatch(deleteItem(id))
    }
  }

  if (!cartItems.length) {
    return <EmptyCart />;
  }
  return (
    <Grid spacing={3} className={classes.bodyWrapper} item container xs={12}>
      {cartItems.map((item) => {
        return (
          <Grid
            key={item.id}
            container
            alignItems={"center"}
            className={classes.itemWrapper}
          >
            <Grid item xs={2}>
              <img alt="pizza" src={item.details.src} />
            </Grid>
            <Grid item container xs={4} justify={"center"}>
              <h1>{item.details.name}</h1>
            </Grid>
            <Grid
              item
              container
              xs={2}
              alignItems={"center"}
              justify={"center"}
            >
              <span onClick={handleDecrement}>-</span>
              <span className={classes.amount}>{counter}</span>{" "}
              <span onClick={handleIncrement}>+</span>
            </Grid>
            <Grid item container xs={2} justify={"center"}>
              <h2>{item.details.price}₽</h2>
            </Grid>
            <Grid item container xs={2} justify={"center"}>
              <h1
                onClick={()=>handleDelete(item.id)}
                className={classes.delete}
              >
                X
              </h1>
            </Grid>
          </Grid>
        );
      })}
      <Backdrop className={classes.backdrop} open={deletingItem}>
        <CircularProgress color="secondary" />
      </Backdrop>
    </Grid>
  );
}

export default Body;
