import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Calendar from "../screens/Calendar";
import MyPage from "../screens/MyPage";
import Library from "../screens/Library";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CALENDAR"
        component={Calendar}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="LIBRARY"
        component={Library}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="dumbbell" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MY PAGE"
        component={MyPage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Navigation;
