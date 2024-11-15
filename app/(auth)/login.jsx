import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import React, { useState } from 'react'
import CustomButton2 from '../../components/CustomButton2';
import FormField from '../../components/FormField';

const login = () => {
  const [form, setForm]=useState({
    username: '',
    password:''
  })
  const submit = () =>{ router.push('../(tabs)/home') }
  return (
    <SafeAreaView className="flex-1 items-center bg-indigo-200">
    <View className="items-center justify-center">
        <Text className="text-3xl font-skrapbook top-2 right-2">LOG IN</Text>
    </View>
      <View className="flex font-skrapbook mx-5 my-5 top-10">
      <FormField
        title="Username"
        value={form.username}
        placeholder='   Enter your username'
        handleChangeText={(e) => setForm({ ...form, username: e })}
      />

      <View className="mt-5"> 
      <FormField
        title="Password"
        value={form.password}
        placeholder='   Enter your password'
        handleChangeText={(e) => setForm({ ...form, password: e })}
      />
      </View>
        </View>
      
      <View style={{alignItems: "center", marginTop: 80}} classname="space-y-4">
          <CustomButton2
            title="LOG IN"
            className="font-skrapbook"
            handlePress={submit}
            containerStyles={{width: 100, backgroundColor: "#818CF8", borderRadius: 50}}
          >
          </CustomButton2>
        </View>

      <View className="flex-row justify-center mt-52">
        <Text className="text-gray-500">or sign in with</Text>
      </View>

      <View className="flex-row justify-center">
        <Image source={require('../../assets/walogo.png')} style={{height: 40, width:40, borderRadius:30}}
        className="mt-5 right-7"
      />

        <Image source={require('../../assets/fblogo.png')} style={{height: 40, width:40, borderRadius:30}}
        className="mt-5"
      />
        <Image source={require('../../assets/xlogo.png')} style={{height: 40, width:40, borderRadius:30}}
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