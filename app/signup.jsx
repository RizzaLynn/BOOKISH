import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useNavigation } from 'expo-router';
import React, { useState } from 'react'

const signup = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-indigo-200">
    <View className="items-center justify-center">
        <Text className="text-3xl bottom-5 font-skrapbook">SIGN UP</Text>
    </View>
      <View className="flex font-skrapbook mx-5 my-5 bottom-5">
      <Text className="text-2xl ml-2 mb-1 font-skrapbook">FIRST NAME</Text>
      <TextInput
        backgroundColor='#A5B4FC'
        placeholder='Enter your first name'
        placeholderTextColor={'white'}
        className={`text-xs border-none rounded-md pl-[10px] h-10 w-80`}
                      />

      <Text className="text-2xl ml-2 mb-1 mt-3 font-skrapbook">SURNAME</Text>
      <TextInput
        backgroundColor='#A5B4FC'
        placeholder='Enter your surname'
        placeholderTextColor={'white'}
        className={`text-xs border-none rounded-md pl-[10px] h-10 w-80`}
                      />

      <Text className="text-2xl ml-2 mb-1 mt-3 font-skrapbook">USERNAME</Text>
      <TextInput
        backgroundColor='#A5B4FC'
        placeholder='Enter your username'
        placeholderTextColor={'white'}
        className={`text-xs border-none rounded-md pl-[10px] h-10 w-80`}
                      />
                      
      <Text className="text-2xl ml-2 mb-1 mt-3 font-skrapbook">MOBILE NUMBER</Text>
      <TextInput
        keyboardType='numeric'
        backgroundColor='#A5B4FC'
        placeholder='Enter your mobile number'
        placeholderTextColor={'white'}
        className={`text-xs border-none rounded-md pl-[10px] h-10 w-80`}
                      />

      <Text className="text-2xl ml-2 mb-1 mt-3 font-skrapbook">PASSWORD</Text>
      <TextInput
        secureTextEntry
        backgroundColor='#A5B4FC'
        placeholder='Enter your password'
        placeholderTextColor={'white'}
        className={`text-xs border-none rounded-md pl-[10px] h-10 w-80`}
                      />

      <Text className="text-2xl ml-2 mb-1 mt-3 font-skrapbook">CONFIRM PASSWORD</Text>
      <TextInput
        secureTextEntry
        backgroundColor='#A5B4FC'
        placeholder='Re-enter your password'
        placeholderTextColor={'white'}
        className={`text-xs border-none rounded-md pl-[10px] h-10 w-80`}
                      />
        </View>

        <View className="items-center justify-center bottom-5">
        <TouchableOpacity 
      onPress={() => navigation.navigate('otp')}
        className="py-1 bg-indigo-400 rounded-full h-10">
        <Text className="font-skrapbook text-xl" style={{ marginLeft: 20, marginRight: 20}}>
        SIGN UP
        </Text>
    </TouchableOpacity>
        </View>

      <View className="flex-row justify-center" style={{top: 10}}>
        <Text>Already have an account? </Text>
        <Link className="font-bold" href="/login">Log In</Link>
      </View>
  </SafeAreaView>
  )
}

export default signup