import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const isSameObj = (obj1: IPressedDate, obj2: IPressedDate) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

interface IHeader {
  month: number;
  year: number;
  date: number;
  today: {
    month: number;
    year: number;
    date: number;
  };
  moveToNextMonth: (month: number) => void;
  moveToPreviousMonth: (month: number) => void;
  moveToSpecificYearAndMonth: (year: number, month: number) => void;
}
interface IPressedDate {
  state: string;
  year: number;
  month: number;
  date: number;
}

type dayType = {
  [key: string]: any;
};

const Body = ({
  month,
  year,
  date,
  today,
  moveToNextMonth,
  moveToPreviousMonth,
  moveToSpecificYearAndMonth,
}: IHeader) => {
  const initialState = {
    prev: {
      daysList: [],
      year: 0,
      month: 0,
    },
    curr: {
      daysList: [],
      year: 0,
      month: 0,
    },
    next: {
      daysList: [],
      year: 0,
      month: 0,
    },
  };

  const [totalDays, setTotalDays] = useState<dayType>(initialState);
  const [pressedDate, setPressedDate] = useState({
    state: "",
    year: 0,
    month: 0,
    date: 0,
  });

  const getTotalDays = (year: number, month: number) => {
    const previousMonthLastDate = new Date(year, month - 1, 0).getDate(); // 이전 달의 마지막 날짜 체크
    const previousMonthLastDay = new Date(year, month - 1, 0).getDay(); // 이전 달의 마지막 날짜의 요일
    const currentMonthLastDate = new Date(year, month, 0).getDate();
    const currentMonthLastDay = new Date(year, month, 0).getDay();

    const previousDays = [];
    for (let i = 0; i < previousMonthLastDay + 1; i++) {
      previousDays.push(previousMonthLastDate - previousMonthLastDay + i);
    }

    const currentDays = [];
    for (let i = 0; i < currentMonthLastDate; i++) {
      currentDays.push(i + 1);
    }

    const nextDays = [];
    for (let i = 0; i < 6 - currentMonthLastDay; i++) {
      nextDays.push(i + 1);
    }

    setTotalDays({
      prev: {
        daysList: previousMonthLastDay !== 6 ? previousDays : [],
        year: month === 1 ? year - 1 : year,
        month: month === 1 ? 12 : month - 1,
      },
      curr: {
        daysList: currentDays,
        year: year,
        month: month,
      },
      next: {
        daysList: nextDays,
        year: month === 12 ? year + 1 : year,
        month: month === 12 ? 1 : month + 1,
      },
    });
  };

  // console.log(JSON.stringify(totalDays, null, 2));
  const handlePressDay = (pressedDate: IPressedDate) => {
    setPressedDate(pressedDate);
    if (pressedDate.state === "prev" || pressedDate.state === "next") {
      moveToSpecificYearAndMonth(pressedDate.year, pressedDate.month);
    }
  };

  useEffect(() => {
    getTotalDays(year, month);
  }, [year, month, date]);
  return (
    <>
      <View style={styles.dayOfWeek}>
        {dayOfWeek.map((day: string, index: number) => (
          <View style={styles.box} key={index}>
            <Text style={dayOfWeekString(day).styled}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.totalDays}>
        {Object.keys(totalDays).map((state: string) =>
          totalDays[state].daysList.map((day: number, index: number) => {
            const checkPressedDate = {
              state: state,
              year: totalDays[state].year,
              month: totalDays[state].month,
              date: day,
            };
            return (
              <View style={styles.box} key={index}>
                <Pressable
                  onPress={handlePressDay.bind(this, checkPressedDate)}
                  style={({ pressed }) => {
                    return [
                      pressedDate.date === checkPressedDate.date &&
                      pressedDate.month === checkPressedDate.month &&
                      pressedDate.year === checkPressedDate.year
                        ? styles.pressedDate
                        : null,
                      pressed && styles.pressed,
                    ];
                  }}
                >
                  <Text
                    style={[
                      [
                        isSameObj({ state: "curr", ...today }, checkPressedDate)
                          ? styles.today
                          : state === "prev" || state === "next"
                          ? styles.prev
                          : styles.curr,
                      ],
                    ]}
                  >
                    {day}
                  </Text>
                </Pressable>
              </View>
            );
          })
        )}
      </View>
    </>
  );
};

const dayOfWeekString = (day: string) =>
  StyleSheet.create({
    styled: {
      color: day === "Sun" ? "tomato" : day === "Sat" ? "royalblue" : "gray",
    },
  });
const styles = StyleSheet.create({
  dayOfWeek: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -10,
  },
  box: {
    width: "14.2%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  totalDays: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  today: {
    color: "black",
    fontWeight: "500",
    fontSize: 24,
  },
  prev: {
    color: "lightgray",
    fontWeight: "300",
    fontSize: 24,
  },
  next: {
    color: "lightgray",
    fontWeight: "300",
    fontSize: 24,
  },
  curr: {
    color: "black",
    fontWeight: "300",
    fontSize: 24,
  },
  pressedDate: {
    width: 40,
    height: 40,
    backgroundColor: "inherit",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.3,
  },
});

export default Body;
