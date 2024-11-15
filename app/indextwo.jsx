import { StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '../components/CustomButton'

const index = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-indigo-200">
    <View className="items-center justify-center">
        <Image source={require('../assets/img1.png')} style={{height: 180, width:350, bottom: 80}}/>
        <Text className="text-2xl font-bold bottom-12" style={{bottom: 50}}>
          Welcome to Bookish
        </Text>
    </View>
    <View className="bottom-5">
        <Text className="font-bold">           We  are  thrilled  to  have  you  here.  To  start</Text>
              <Text className="font-bold">enjoying   our   vast   collection  of  books  for  free,</Text>
              <Text className="font-bold">please   sign   in   to   your   account.   Once   you’re</Text>
              <Text className="font-bold">signed  in,  you’ll  have unlimited access  to  all  the</Text>
              <Text className="font-bold">books  you  could  wish  for.  Happy reading!</Text>
        
    </View>
      <View style={{width: 300, top: 166}} classname="space-y-4">
        <CustomButton
          title="Continue Here"
          handlePress={() => router.push('/(auth)/signup')}
          containerStyles={{width: 300}}
        >
        </CustomButton>
      </View>
    </SafeAreaView>
  )
}

export default index
