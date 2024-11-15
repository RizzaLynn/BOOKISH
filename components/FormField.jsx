import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text style={{fontWeight: 700, marginBottom: 6}}>{title}</Text>
      <View className="w-full h-16 px-4 rounded-2xl items-center"
      style={{backgroundColor: "#A5B4FC", borderRadius: 6, display: "flex", flexDirection: "row", width: 315, height: 40}}
      >
        <TextInput
          className="flex-1 text-white font-u_regular text-base"
          style={{fontSize: 12, marginLeft: 5}}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="white"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{width: 20, height: 20, top: 10, left: 152, position: "absolute", tintColor: "white"}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        {title === "Confirm Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={{width: 20, height: 20, top: 10, left: 135, position: "absolute", tintColor: "white"}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default FormField;
