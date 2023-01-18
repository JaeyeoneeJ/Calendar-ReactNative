import { View, Text, StyleSheet } from "react-native";

const MyPage = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Page</Text>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});
