export const addTransaction = (transaction) => ({
  type: "ADD_TRANSACTION",
  payload: transaction,
});

export const initUsername = (username) => ({
  type: "INIT_USERNAME",
  payload: username,
});

export const resetDate = (month, year) => ({
  type: "RESET_DATE",
  payload: { month, year },
});

export const changeDate = (month, year) => ({
  type: "CHANGE_DATE",
  payload: { month, year },
});
