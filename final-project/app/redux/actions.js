export const addTransaction = (transaction) => ({
  type: "ADD_TRANSACTION",
  payload: transaction,
});

export const initUsername = (username) => ({
  type: "INIT_USERNAME",
  payload: username,
});
