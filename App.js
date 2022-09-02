import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, View } from "react-native";
import DetailMemes from "./src/pages/Detail_Memes/DetailMemes";
import ListMemes from "./src/pages/List_Memes/ListMemes";

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator>
        <StackApp.Screen
          name="ListMemes"
          component={ListMemes}
          options={{
            headerShown: false,
          }}
        />

        <StackApp.Screen
          name="DetailMemes"
          component={DetailMemes}
          options={{
            headerShown: false,
          }}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
