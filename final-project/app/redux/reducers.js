const initialState = {
  transactions: [],
  balance: 0,
  user: "admin",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const updatedTransactions = [...state.transactions, action.payload];
      const updatedBalance =
        action.payload.type === "Income"
          ? state.balance + action.payload.amount
          : state.balance - action.payload.amount;

      return {
        ...state,
        transactions: updatedTransactions,
        balance: updatedBalance,
      };
    case "INIT_USERNAME":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
