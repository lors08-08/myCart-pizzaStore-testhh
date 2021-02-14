const initialState = {
  loadingMenu: false,

  menuItems: [],
};

function menu(state = initialState, action) {
  switch (action.type) {
    case "menu/load/start":
      return {
        ...state,
        loadingMenu: true,
      };
    case "menu/load/succeed":
      return {
        ...state,
        loadingMenu: false,
        menuItems: action.payload,
      };
    default:
      return state;
  }
}

export default menu;
