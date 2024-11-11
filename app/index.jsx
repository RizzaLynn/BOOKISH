import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router'

const index = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-indigo-200">
      <Image source={require('../assets/bookishlogo.png')} style={{height: 180, width:300, marginTop: 290}}/>
      <Text className="text-2xl font-satisfy" style={{marginBottom: 350}}>"Read beyond Borders"</Text>
      <View style={{width: 300, bottom: 120}} classname="space-y-4">
    <TouchableOpacity 
      onPress={() => navigation.navigate('indextwo')}
        className="py-3 bg-indigo-300 rounded-xl mt-5">
        <Text style={{fontSize: 16, fontWeight: "bold", marginLeft: 98}}>
        Continue Here
        </Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default index
