import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Body from "../components/Body";
import Header from "../components/Header";

const Calendar = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();
  const today = { year: YEAR, month: MONTH, date: DAY };

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [date] = useState(DAY);

  const moveToNextMonth = (month: number) => {
    if (month === 12) {
      setYear((previousYear) => previousYear + 1);
      setMonth(1);
    } else {
      setMonth((previouMonth) => previouMonth + 1);
    }
  };

  const moveToPreviousMonth = (month: number) => {
    if (month === 1) {
      setYear((previousYear) => previousYear - 1);
      setMonth(12);
    } else {
      setMonth((previousMonth) => previousMonth - 1);
    }
  };

  const moveToSpecificYearAndMonth = (year: number, month: number) => {
    setYear(year);
    setMonth(month);
  };

  return (
    <View style={styles.calendarContainer}>
      <Header
        month={month}
        year={year}
        moveToNextMonth={moveToNextMonth}
        moveToPreviousMonth={moveToPreviousMonth}
      />
      <Body
        month={month}
        year={year}
        date={date}
        today={today}
        moveToNextMonth={moveToNextMonth}
        moveToPreviousMonth={moveToPreviousMonth}
        moveToSpecificYearAndMonth={moveToSpecificYearAndMonth}
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendarContainer: { margin: 10 },
});
