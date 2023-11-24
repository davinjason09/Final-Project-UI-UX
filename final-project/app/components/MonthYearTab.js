import React, { useState } from "react";
import { View } from "react-native";

import MonthYearPicker from "./MonthYearPicker";

export default function MonthYearTab() {
  const getCurrentMonth = () => new Date().getMonth();
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

  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    const prevMonth = getPreviousMonth(selectedMonth);
    const prevYear = prevMonth === 11 ? selectedYear - 1 : selectedYear;
    setSelectedMonth(prevMonth);
    setSelectedYear(prevYear);
  };

  const handleNextMonth = () => {
    const nextMonth = getNextMonth(selectedMonth);
    const nextYear = nextMonth === 0 ? selectedYear + 1 : selectedYear;
    setSelectedMonth(nextMonth);
    setSelectedYear(nextYear);
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
