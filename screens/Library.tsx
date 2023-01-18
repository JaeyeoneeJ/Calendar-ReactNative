import { View, Text, StyleSheet } from "react-native";

const Library = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Library</Text>
    </View>
  );
};

export default Library;

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
