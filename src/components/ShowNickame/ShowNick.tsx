import { Text } from "react-native";
import { contextApp } from "../../utils/context/UseContext";
import { stylecredentials } from "./style";

export const ShowNickname = () => {
  const { credencias } = contextApp();
  return (
      <Text style={stylecredentials.nickname}>BiruBiru</Text>
  )
};
