import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LoginPage from "../LoginPage";
import { initUser } from "../../redux/actions";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const mockStore = configureStore([]);

describe("LoginPage", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("should handle login correctly", () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    fireEvent.changeText(getByTestId("username"), "testuser");
    fireEvent.changeText(getByTestId("password"), "testpassword");

    fireEvent.press(getByText("Login"));

    const actions = store.getActions();
    expect(actions).toEqual([initUser("testuser", "testpassword")]);
  });
});
