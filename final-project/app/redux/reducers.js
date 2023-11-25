const initialState = {
  transactions: [],
  balance: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
        balance:
          action.payload.type === "Income"
            ? state.balance + action.payload.amount
            : state.balance - action.payload.amount,
      };
    default:
      return state;
  }
};

export default rootReducer;
