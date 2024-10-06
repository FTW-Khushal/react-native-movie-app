import React from "react";
import { Box, StatusBar, Text } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView >
      <StatusBar backgroundColor="#2c3e50" barStyle="light-content"  />
      <Box bg="#2c3e50" alignItems="center" justifyContent="center" py={5}>
        <Text color="#fff" fontSize={20}>Movies App</Text>
      </Box>
    </SafeAreaView>
  );
};

export default Header;