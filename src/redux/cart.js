const initialState = {
  loadingCart: false,
  addingItem: false,
  deletingItem: false,

  cartItems: [],
};

function cart(state = initialState, action) {
  switch (action.type) {
    case "cart/load/start":
      return {
        ...state,
        loadingCart: true,
      };
    case "cart/load/succeed":
      return {
        ...state,
        loadingCart: false,
        cartItems: action.payload,
      };
    case "cart/order/start":
      return {
        ...state,
        addingItem: true,
      };
    case "cart/order/succeed":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        addingItem: false,
      };
    case "cart/delete/start":
      return {
        ...state,
        deletingItem: true,
      };
    case "cart/delete/succeed":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        deletingItem: false,
      };
    case "cart/deleteAll/start":
      return {
        ...state,
        deletingItem: true,
      };
    case "cart/deleteAll/succeed":
      return {
        ...state,
        cartItems: [],
        deletingItem: false,
      };
    default:
      return state;
  }
}

export default cart;
