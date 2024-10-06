import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  FormControl,
  FormControlLabelText,
  HStack,
  Icon,
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import Selection from "../froms/Selection";

interface FormProps {
  options: {
    label: string;
    value: string;
    isDisabled?: boolean;
    isSelected?: boolean;
  }[]; // includes isSelected
  onSubmit: (searchTerm: string, selectedValue: string) => void; // only submit handler from parent
}

const Form: React.FC<FormProps> = ({ options, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  // Set the default selected value based on the options passed from the parent
  useEffect(() => {
    const defaultOption = options.find((option) => option.isSelected);
    if (defaultOption) {
      setSelectedValue(defaultOption.value);
    }
  }, [options]);

  const handleSubmit = () => {
    if (selectedValue) {
      // Call the onSubmit function passed from the parent component
      onSubmit(searchTerm, selectedValue);
    }
  };

  return (
    <VStack space={"sm"} width="100%" p={5} my={10}>
      <FormControl isRequired>
        <FormControl.Label>
          <FormControlLabelText>
            Search Movies/TV Shows Name
          </FormControlLabelText>
        </FormControl.Label>

        <HStack width={"100%"} space="xs">
          <Input px={5} style={style.inputStyle}>
            <InputIcon>
              <Icon as={SearchIcon} size="sm" />
            </InputIcon>
            <InputField
            placeholder="James bond"
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
            ></InputField>
          </Input>
        </HStack>

        <FormControl.Label>
          <FormControlLabelText>Choose Search Type</FormControlLabelText>
        </FormControl.Label>
      </FormControl>

      <HStack width={"100%"} space="xs">
        <Box px={5} flex={1}>
          <Selection
            options={options}
            selectedValue={selectedValue}
            onValueChange={setSelectedValue} // Local handler for selectedValue
          />
        </Box>

        <Button onPress={handleSubmit}>
          <ButtonIcon as={SearchIcon} mr="$2" />
          <ButtonText>Search</ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
};

const style = StyleSheet.create({
  inputStyle: { flex: 1, alignItems: "center" },
});

export default Form;
