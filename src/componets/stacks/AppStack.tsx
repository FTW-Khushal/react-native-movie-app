import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import ShowScreen from "../screens/ShowScreen";
import AppTabs from "../tabs/AppTabs";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={AppTabs}
          options={{
            title: "Movies App",
            headerStyle: { backgroundColor: "#2c3e50" },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen name="Show" component={ShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
