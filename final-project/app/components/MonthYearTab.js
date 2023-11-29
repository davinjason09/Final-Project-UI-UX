import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../redux/actions";
import MonthYearPicker from "./MonthYearPicker";

export default function MonthYearTab() {
  const dispatch = useDispatch();
  const selectedMonth = useSelector((state) => state.initialMonth);
  const selectedYear = useSelector((state) => state.initialYear);

  const getPreviousMonth = (currentMonth) =>
    currentMonth === 0 ? 11 : currentMonth - 1;
  const getNextMonth = (currentMonth) =>
    currentMonth === 11 ? 0 : currentMonth + 1;

  const getMonthName = (monthIndex) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[monthIndex];
  };

  const handlePrevMonth = () => {
    const prevMonth = getPreviousMonth(selectedMonth);
    const prevYear = prevMonth === 11 ? selectedYear - 1 : selectedYear;

    dispatch(changeDate(prevMonth, prevYear));
  };

  const handleNextMonth = () => {
    const nextMonth = getNextMonth(selectedMonth);
    const nextYear = nextMonth === 0 ? selectedYear + 1 : selectedYear;

    dispatch(changeDate(nextMonth, nextYear));
  };

  return (
    <View>
      <MonthYearPicker
        month={getMonthName(selectedMonth)}
        year={selectedYear}
        onPrev={handlePrevMonth}
        onNext={handleNextMonth}
      />
    </View>
  );
}
