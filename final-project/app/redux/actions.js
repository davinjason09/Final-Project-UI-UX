export const initUser = (username, password) => ({
  type: "INIT_USER",
  payload: { username, password },
});

export const setProfileImage = (image) => ({
  type: "SET_PROFILE_IMAGE",
  payload: image,
});

export const editProfile = (username, email, gender) => ({
  type: "EDIT_PROFILE",
  payload: { username, email, gender },
});

export const resetDate = (month, year) => ({
  type: "RESET_DATE",
  payload: { month, year },
});

export const changeDate = (month, year) => ({
  type: "CHANGE_DATE",
  payload: { month, year },
});

export const addTransaction = (transaction) => ({
  type: "ADD_TRANSACTION",
  payload: transaction,
});

export const editCategory = (month, year, type, amount) => ({
  type: "UPDATE_CATEGORY_ALLOCATION",
  payload: { month, year, type, amount },
});
