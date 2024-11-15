import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import React, { useState } from 'react'
import CustomButton2 from '../../components/CustomButton2';
import FormField from '../../components/FormField';

const signup = () => {
  const [form, setForm]=useState({
    firstname:'',
    surname:'',
    username: '',
    mobilenumber:'',
    password:'',
    confirmpassword:''
  })
  const submit = () =>{ router.push('/otp') }
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-indigo-200">
    <View className="items-center justify-center">
        <Text className="text-3xl bottom-5 font-skrapbook">SIGN UP</Text>
    </View>
      <View className="flex font-skrapbook mx-5 my-5 bottom-5">      
      <FormField
        title="First name"
        value={form.firstname}
        placeholder='   Enter your full name'
        handleChangeText={(e) => setForm({ ...form, firstname: e })}
      />

      <View className="mt-5"> 
      <FormField
        title="Surname"
        value={form.surname}
        placeholder='   Enter your full name'
        handleChangeText={(e) => setForm({ ...form, surname: e })}
      />
      </View>

      <View className="mt-5"> 
      <FormField
        title="Username"
        value={form.username}
        placeholder='   Enter your username'
        handleChangeText={(e) => setForm({ ...form, username: e })}
      />
      </View>
                      
      <View className="mt-5"> 
      <FormField
        title="Mobile Number"
        value={form.mobilenumber}
        placeholder='   Enter your mobile number'
        handleChangeText={(e) => setForm({ ...form, mobilenumber: e })}
      />
      </View>

      <View className="mt-5"> 
      <FormField
        title="Password"
        value={form.password}
        placeholder='   Enter your password'
        handleChangeText={(e) => setForm({ ...form, password: e })}
      />
      </View>

      <View className="mt-5"> 
      <FormField
        title="Confirm Password"
        value={form.confirmpassword}
        placeholder='   Re-enter your password'
        handleChangeText={(e) => setForm({ ...form, confirmpassword: e })}
      />
      </View>
      </View>

        <View style={{alignItems: "center", bottom: 12}} classname="space-y-4">
          <CustomButton2
            title="SIGN UP"
            className="font-skrapbook"
            handlePress={submit}
            containerStyles={{width: 100, backgroundColor: "#818CF8", borderRadius: 50}}
          >
          </CustomButton2>
        </View>

      <View className="flex-row justify-center" style={{top: 10}}>
        <Text>Already have an account? </Text>
        <Link className="font-bold" href="/login">Log In</Link>
      </View>
      
  </SafeAreaView>
  )
}

export default signup