import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useNavigation } from 'expo-router';
import React from 'react'

const login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center bg-indigo-200">
    <View className="items-center justify-center">
        <Text className="text-3xl font-skrapbook top-2 right-2">LOG IN</Text>
    </View>
      <View className="flex font-skrapbook mx-5 my-5 top-10">
      <Text className="text-2xl ml-2 mb-1 mt-3 font-skrapbook">USERNAME</Text>
      <TextInput
        backgroundColor='#A5B4FC'
        placeholder='Enter your username'
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

        </View>

      <View className="items-center justify-center top-10">
        <TouchableOpacity 
      onPress={() => navigation.navigate('(tabs)')}
        className="py-1 bg-indigo-400 rounded-full h-10">
        <Text className="font-skrapbook text-xl" style={{ marginLeft: 20, marginRight: 20}}>
        LOG IN
        </Text>
    </TouchableOpacity>
      </View>

      <View className="flex-row justify-center mt-52">
        <Text className="text-gray-500">or sign in with</Text>
      </View>

      <View className="flex-row justify-center">
        <Image source={require('../assets/walogo.png')} style={{height: 40, width:40, borderRadius:30}}
        className="mt-5 right-7"
      />

        <Image source={require('../assets/fblogo.png')} style={{height: 40, width:40, borderRadius:30}}
        className="mt-5"
      />
        <Image source={require('../assets/xlogo.png')} style={{height: 40, width:40, borderRadius:30}}
        className="mt-5 left-7"
        />
      </View>

      <View className="flex-row justify-center" style={{top: 90}}>
        <Text>Don't have an account? </Text>
        <Link className="font-bold" href="/signup">Sign Up</Link>
      </View>
      
  </SafeAreaView>
  )
}

export default login