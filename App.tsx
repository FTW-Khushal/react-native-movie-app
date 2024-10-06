import { config } from "@gluestack-ui/config";
import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { ScrollView } from "react-native";
import Gradient from "./assets/Icons/Gradient";
import DocumentData from "./assets/Icons/DocumentData";
import LightBulbPerson from "./assets/Icons/LightbulbPerson";
import Rocket from "./assets/Icons/Rocket";
import Logo from "./assets/Icons/Logo";
import { StatusBar } from "expo-status-bar";
import Header from "./src/componets/layout/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MoviesContainer from "./src/componets/containers/MoviesContainer";
import AppStack from "./src/componets/stacks/AppStack";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function App() {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        {/* <MoviesContainer/> */}
        {/* <Header /> */}
        <AppStack/>
        <StatusBar style="auto" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}
