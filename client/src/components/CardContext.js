import { createContext, useReducer } from "react";
import { getDataFromServer } from "./handler";

const initialState = {
  status: "idl", //idle,addItem,redData,deleteItem
  cardList: [],
  userId: null, // for Strech goal
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Item_To_Card":{
        return {...state, cardList: [...action.items]}        
    }
      break;

    default:
      break;
  }
};

export const CardConext = createContext(null);

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // this function use for add item into the card
  const add_Item = async() => {
    const result = await getDataFromServer("/api/cart/details");
    dispatch({
      type: "Add_Item_To_Card",
      items: result,
    });
  };
  // this function use for delete item from the card
  const delete_Item = (data) => {
    dispatch({
      type: "Delete_Item_From_Card",
      itemId: data,
    });
  };
  // this function use for Update item qty in the card
  const get_Items = (data) => {
    dispatch({
      type: "Add_Item_To_Card",
      qty: data,
    });
  };
  return (
    <CardConext.Provider value={{state,action:{add_Item}}} >
        {children}
    </CardConext.Provider>
  );
};