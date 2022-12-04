/** @format */

import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ name, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={() => {}} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;
