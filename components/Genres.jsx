import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Genres = () => {
  return (
    <ScrollView className="bg-white" horizontal={true} showsHorizontalScrollIndicator={false}>
    <View className="flex-row">
        <TouchableOpacity style={{width: 110, bottom: 4}}>
            <Image source={require('../assets/genres/crime.jpg')} 
            style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
            <Text className="font-laibold" style={{ fontSize: 17, left: 60, bottom: 18}}>CRIME</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 140, bottom: 20}}>
            <Image source={require('../assets/genres/fantasy.png')} 
            style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
            <Text className="font-sregular" 
            style={{ fontSize: 17, left: 60, bottom: 18}}>FICTION</Text>
        </TouchableOpacity>
    </View>
    <View className="flex-row">
        <TouchableOpacity>
            <Image source={require('../assets/genres/romance.png')} 
            style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
            <Text className="font-laibold" style={{ fontSize: 17, left: 60, bottom: 18}}>ROMANCE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 140, bottom: 20}}>
            <Image source={require('../assets/genres/self-help.png')} 
            style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
            <Text className="font-sregular" 
            style={{ fontSize: 17, left: 60, bottom: 18}}>SELF-HELP</Text>
        </TouchableOpacity>
    </View>
    <View className="flex-row">
        <TouchableOpacity style={{width: 170, bottom: 4, left: 15}}>
            <Image source={require('../assets/genres/horror.png')} 
            style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
            <Text className="font-sregular" 
            style={{ fontSize: 17, left: 60, bottom: 18}}>HORROR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 140, bottom: 20, left: 15}}>
            <Image source={require('../assets/genres/thrill.png')} 
            style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
            <Text className="font-sregular" 
            style={{ fontSize: 17, left: 60, bottom: 18}}>THRILL</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Genres

const styles = StyleSheet.create({})