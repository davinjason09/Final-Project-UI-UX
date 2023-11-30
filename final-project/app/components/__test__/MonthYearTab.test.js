import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MonthYearTab from "../MonthYearTab";
import { changeDate } from "../../redux/actions";

const mockStore = configureStore([]);

describe("MonthYearTab", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      initialMonth: 10,
      initialYear: 2023,
    });
  });

  it("should handle previous month correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MonthYearTab />
      </Provider>
    );

    fireEvent.press(getByTestId("prevButton"));

    const actions = store.getActions();
    expect(actions).toEqual([changeDate(9, 2023)]);
  });

  it("should handle next month correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MonthYearTab />
      </Provider>
    );

    fireEvent.press(getByTestId("nextButton"));

    const actions = store.getActions();
    expect(actions).toEqual([changeDate(11, 2023)]);
  });
});
