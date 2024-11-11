import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect, Stack } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <View className="flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        className="w-8 h-6"
        tintColor={color}
      />

      <Text
        className={`${focused ? "font-bold" : "font-semibold"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  
    
  )
  
}

const TabLayout = () => {
  return (
   <>
    <Tabs
    screenOptions={{
          tabBarActiveTintColor: "#8B5CF6",
          tabBarInactiveTintColor: "#1A237E",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#a5b4fc",
            borderTopWidth: .4,
            borderTopColor: "#9FA8DA",
            height: 60,
          },
        }}>


      <Tabs.Screen
        name="home"
        options={{
          title:'Home',
          headerShown: false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
           />
          )
        }}
      />

      <Tabs.Screen
        name="upload"
        options={{
          title:'Upload',
          headerShown: false,
          tabBarIcon:({color,focused})=>(
            <Image
            source={require('../../assets/icons/upload.png')} 
            style={{height: 90, width: 90, bottom: 30}}
            name="Upload"
            focused={focused}/>
          )
        }}
      />
      

    <Tabs.Screen
        name="notification"
        options={{
          title:'Notification',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.notification}
            color={color}
            name="Notification"
            focused={focused}
           />
          )
        }}
      />


    </Tabs>
   </>
  )
}

export default TabLayout