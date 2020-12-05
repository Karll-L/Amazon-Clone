export const initialState = {
  basket: [],
  user: null,
};

//Slector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "remove_from_cart":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action}) from the Basket.`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "set_user":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
