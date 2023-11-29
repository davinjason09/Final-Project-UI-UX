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
  monthlyData: {},
};

const initializeMonthlyData = (monthlyData, year, month) => {
  if (!monthlyData[year]) {
    monthlyData[year] = {};
  }

  if (!monthlyData[year][month]) {
    monthlyData[year][month] = {
      balance: 0,
      spent: 0,
      categories: {
        Shopping: {
          allocated: 0,
          spent: 0,
        },
        Food: {
          allocated: 0,
          spent: 0,
        },
        Education: {
          allocated: 0,
          spent: 0,
        },
        Household: {
          allocated: 0,
          spent: 0,
        },
        Social: {
          allocated: 0,
          spent: 0,
        },
      },
    };
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case "ADD_TRANSACTION":
      const transactionMonth = new Date(action.payload.date).getMonth();
      const transactionYear = new Date(action.payload.date).getFullYear();

      initializeMonthlyData(
        state.monthlyData,
        transactionYear,
        transactionMonth
      );

      const updatedTransactions = [...state.transactions, action.payload];
      const updatedBalance =
        action.payload.type === "Income"
          ? state.balance + action.payload.amount
          : state.balance - action.payload.amount;

      if (action.payload.type === "Income") {
        state.monthlyData[transactionYear][transactionMonth].balance +=
          action.payload.amount;
      } else {
        state.monthlyData[transactionYear][transactionMonth].spent +=
          action.payload.amount;
        state.monthlyData[transactionYear][transactionMonth].categories[
          action.payload.category
        ].spent += action.payload.amount;
      }

      return {
        ...state,
        transactions: updatedTransactions,
        balance: updatedBalance,
        monthlyData: { ...state.monthlyData },
      };
    case "UPDATE_CATEGORY_ALLOCATION":
      const { month, year, type, amount } = action.payload;

      initializeMonthlyData(state.monthlyData, year, month);

      const updatedMonthlyData = { ...state.monthlyData };
      updatedMonthlyData[year][month].categories[type].allocated = amount;

      return {
        ...state,
        monthlyData: updatedMonthlyData,
      };
    default:
      return state;
  }
};

export default rootReducer;
