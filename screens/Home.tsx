import { View, Text, StyleSheet } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;

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
