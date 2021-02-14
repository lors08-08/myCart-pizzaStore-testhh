import React, { useEffect } from "react";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./components/TopBar";
import Cart from "./components/Cart/Cart";
import { loadCart, loadMenu } from "./redux/actions";

const useStyles = makeStyles(() => ({
  background: {
    minHeight: "100vh",
    padding: "30px 30px",
    backgroundColor: "#FFDF8C",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    paddingBottom: "30px",
  },
}));

function App() {
  const dispatch = useDispatch();

  const loadingCart = useSelector((state) => state.cart.loadingCart);
  const loadingMenu = useSelector((state) => state.menu.loadingMenu);
  const classes = useStyles();

  useEffect(() => {
    ///получаем меню
    dispatch(loadMenu());
    ///получаем товары из корзины
    dispatch(loadCart());
  }, [dispatch]);

  if (loadingCart || loadingMenu) {
    return <Loader />;
  }
  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        <TopBar />
        <Cart />
      </div>
    </div>
  );
}

export default App;
