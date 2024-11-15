import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';

const CustomButton2 = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={isLoading ? null : handlePress}
      activeOpacity={0.7}
      style={[{ paddingVertical: 9, backgroundColor: '#A5B4FC', borderRadius: 13, minHeight: 20}, containerStyles]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[{ fontSize: 16, fontWeight: "bold", textAlign: 'center'}, textStyles]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton2;