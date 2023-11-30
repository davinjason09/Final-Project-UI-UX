import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import EditProfile from "../EditProfile";
import { editProfile } from "../../redux/actions";

const mockStore = configureStore([]);

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));

describe("EditProfile", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        username: "testUsername",
        email: "test@example.com",
        gender: "Male",
        image: null,
      },
    });
  });

  it("should handle saving profile changes correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <EditProfile />
      </Provider>
    );

    fireEvent.changeText(getByPlaceholderText("Enter Username"), "newUsername");
    fireEvent.changeText(
      getByPlaceholderText("Enter Email"),
      "new@example.com"
    );
    fireEvent.changeText(getByPlaceholderText("Enter Gender"), "Female");

    fireEvent.press(getByText("Save"));

    const actions = store.getActions();
    expect(actions).toContainEqual(
      editProfile("newUsername", "new@example.com", "Female")
    );
  });
});
