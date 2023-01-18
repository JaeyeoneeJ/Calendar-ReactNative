import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IHeader {
  month: number;
  year: number;
  moveToNextMonth: (month: number) => void;
  moveToPreviousMonth: (month: number) => void;
}

const monthToString = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Header = ({
  month,
  year,
  moveToNextMonth,
  moveToPreviousMonth,
}: IHeader) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={moveToPreviousMonth.bind(this, month)}>
        <Ionicons name="chevron-back" size={24} color="dodgerblue" />
      </Pressable>
      <Text style={styles.text}>
        {monthToString[month - 1]} {year}
      </Text>
      <Pressable onPress={moveToNextMonth.bind(this, month)}>
        <Ionicons name="chevron-forward" size={24} color="dodgerblue" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 14,
  },
  text: {
    fontSize: 16,
  },
});

export default Header;
