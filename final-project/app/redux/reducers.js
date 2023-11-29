const initialState = {
  transactions: [],
  balance: 0,
  user: "admin",
  initialMonth: new Date().getMonth(),
  initialYear: new Date().getFullYear(),
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
    case "RESET_DATE":
      return {
        ...state,
        initialMonth: action.payload.month,
        initialYear: action.payload.year,
      };
    case "CHANGE_DATE":
      return {
        ...state,
        initialMonth: action.payload.month,
        initialYear: action.payload.year,
      };
    default:
      return state;
  }
};

export default rootReducer;
