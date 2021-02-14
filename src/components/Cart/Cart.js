import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import Menu from "../Menu/Menu";

function Cart() {
  const menu = useSelector((state) => state.menu.menuItems);
  const cart = useSelector((state) =>
    state.cart.cartItems.map((item) => {
      return {
        ...item,
        details: menu.find((menu) => menu.id === item.menuId),
      };
    })
  );

  return (
    <Grid container>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Header />
        <Body cartItems={cart} />
        <Footer cartItems={cart} />
        <Menu menu={menu} />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}

export default Cart;
