import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./src/components";
import FixGlobal from "./src/utils/axios-bug-fix";
const { Keys, Championship, Phases } = Index;

const Stack = createStackNavigator();

export default function App() {
  FixGlobal();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Championship"
          component={Championship}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Phases"
          component={Phases}
          options={{
            title: "",
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Keys"
          component={Keys}
          options={{
            title: "",
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
