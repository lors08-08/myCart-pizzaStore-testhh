export function loadCart() {
  return (dispatch) => {
    dispatch({ type: "cart/load/start" });

    fetch("http://localhost:3010/cart")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "cart/load/succeed",
          payload: json,
        });
      });
  };
}

export function loadMenu() {
  return (dispatch) => {
    dispatch({ type: "menu/load/start" });

    fetch("http://localhost:3010/menu")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "menu/load/succeed",
          payload: json,
        });
      });
  };
}

export function addItem(menuId) {
  return (dispatch) => {
    dispatch({ type: "cart/order/start" });
    fetch("http://localhost:3010/cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menuId,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "cart/order/succeed",
          payload: json,
        });
      });
  };
}

export function deleteItem(id) {
  return (dispatch) => {
    dispatch({ type: "cart/delete/start" });
    fetch(`http://localhost:3010/cart/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "cart/delete/succeed",
          payload: id,
        });
      });
  };
}

export function deleteAllItems() {
  return (dispatch) => {
    dispatch({ type: "cart/deleteAll/start" });
    fetch("http://localhost:3010/cart/", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "cart/deleteAll/succeed",
        });
      });
  };
}
