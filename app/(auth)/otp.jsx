import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const otp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-indigo-200">
    <View className="items-center justify-center">
        <Image source={require('../../assets/img2.png')} style={{height: 223, width:350, bottom: 80}}/>
        <Text className="text-2xl font-bold bottom-12" style={{bottom: 50}}>
          OTP Verification
        </Text>
    </View>

    <View className="bottom-10">
        <Text className="font-light">Enter the OTP send to your mobile number</Text>
    </View>
    <View className="flex-row">
    <TextInput
        keyboardType='numeric'
        backgroundColor='#A5B4FC'
        maxLength={1}
        className={`border-none rounded-md text-center text-2xl font-extrabold w-14 h-14`}
                      />

    <TextInput
        keyboardType='numeric'
        backgroundColor='#A5B4FC'
        maxLength={1}
        className={`border-none rounded-md text-center text-2xl font-extrabold w-14 h-14 ml-4`}
                      />

    <TextInput
        keyboardType='numeric'
        backgroundColor='#A5B4FC'
        maxLength={1}
        className={`border-none rounded-md text-center text-2xl font-extrabold w-14 h-14 ml-4`}
                      />

    <TextInput
        keyboardType='numeric'
        backgroundColor='#A5B4FC'
        maxLength={1}
        className={`border-none rounded-md text-center text-2xl font-extrabold w-14 h-14 ml-4`}
                      />
    </View>

    <View className="items-center flex-row top-36">
      <Text>Don't receive the OTP? </Text>
      <Text className="text-blue-600">resend OTP</Text>
    </View>
    <View style={{width: 300, top: 140}} classname="space-y-4">
    <TouchableOpacity 
      onPress={() => navigation.navigate('login')}
        className="py-3 bg-indigo-300 rounded-xl mt-5">
        <Text style={{fontSize: 16, fontWeight: "bold", marginLeft: 98}}>
        Verify & Proceed
        </Text>
    </TouchableOpacity>
    </View>

    </SafeAreaView>
  )
}

export default otp

const styles = StyleSheet.create({})