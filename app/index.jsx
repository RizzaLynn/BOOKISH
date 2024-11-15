import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '../components/CustomButton';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-indigo-200">
      <Image source={require('../assets/bookishlogo.png')} style={{height: 180, width:300, marginTop: 290}}/>
      <Text className="text-2xl font-satisfy" style={{marginBottom: 350}}>"Read beyond Borders"</Text>

      <View style={{width: 300, bottom: 107}} classname="space-y-4">
          <CustomButton
            title="Continue Here"
            handlePress={() => router.push('/indextwo')}
            containerStyles={{width: 300}}
          >
          </CustomButton>
        </View>
    </View>
  )
}

export default index
