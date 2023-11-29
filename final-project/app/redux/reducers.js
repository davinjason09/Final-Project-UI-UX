const initialState = {
  transactions: [],
  balance: 0,
  user: {
    username: "",
    email: "",
    password: "",
    gender: "",
    image: "",
  },
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
    case "INIT_USER":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          password: action.payload.password,
        },
      };
    case "SET_PROFILE_IMAGE":
      return {
        ...state,
        user: {
          ...state.user,
          image: action.payload,
        },
      };
    case "EDIT_PROFILE":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          email: action.payload.email,
          gender: action.payload.gender,
        },
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
