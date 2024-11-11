import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notification = () => {
  return (
    <SafeAreaView className="bg-indigo-200">
        <View className="items-center justify-center">
        <Text className="font-laisemibold text-2xl mt-2">NOTIFICATIONS</Text>
        </View>

        
        <View style={{
          height: 600,
          width: 340,
          margin: 10,
          backgroundColor: '#A5B4FC',
          borderRadius: 30,
          marginTop: 70,
        }}>
        
        <View style={{
          height: 650,
          width: 300,
          margin: 20,
          backgroundColor: '#93c5fd',
          borderRadius: 30,
          bottom: 75,
        }}>
          <ScrollView>
          <Image
          source={require('../../assets/notifications/throphy.png')} 
          style={{height: 40, width: 40, marginLeft: 20, marginTop: 30}}/>
          <Text className="font-laimedium" 
                style={{fontSize: 13, textAlign: "center", left: 20, bottom: 42}}>You’ve read 10 books this{'\n'}
                month. High-five!
          </Text>
          <Text style={{left: 35 , bottom: 30}}>___________________________________</Text>

          <Image
          source={require('../../assets/notifications/announcement2.png')} 
          style={{height: 40, width: 40, marginLeft: 25, top: 20}}/>
          <Text className="font-laimedium" 
                style={{fontSize: 13, textAlign: "center", left: 20, bottom: 42}}>Jane Austen just added an extra{'\n'}
                chapter to ‘Pride and Prejudice’!{'\n'}
                Dive back into Regency{'\n'}
                England.
          </Text>
          <Text style={{left: 35 , bottom: 30}}>___________________________________</Text>

          <Image
          source={require('../../assets/notifications/launch2.png')} 
          style={{height: 40, width: 40, marginLeft: 25, top: 10}}/>
          <Text className="font-laimedium" 
                style={{fontSize: 13, textAlign: "center", left: 20, bottom: 42}}>The Midnight Library’ sequel{'\n'}
                drops today. Get ready for{'\n'}
                more Nora Seed!
          </Text>
          <Text style={{left: 35 , bottom: 30}}>___________________________________</Text>

          <Image
          source={require('../../assets/notifications/congratulation.png')} 
          style={{height: 40, width: 40, marginLeft: 25}}/>
          <Text className="font-laimedium" 
                style={{fontSize: 13, textAlign: "center", left: 20, bottom: 42}}>J.K. Rowling just followed you!{'\n'}
                Accio excitement!
          </Text>
          <Text style={{left: 35 , bottom: 30}}>___________________________________</Text>

          <Image
          source={require('../../assets/notifications/curious.png')} 
          style={{height: 40, width: 40, marginLeft: 25, top: 10}}/>
          <Text className="font-laimedium" 
                style={{fontSize: 13, textAlign: "center", left: 20, bottom: 42}}>A mysterious stranger just{'\n'}
                arrived in ‘Murder on the{'\n'}
                Orient Express.’
          </Text>
          <Text style={{left: 35 , bottom: 30}}>___________________________________</Text>

          <Image
          source={require('../../assets/notifications/search2.png')} 
          style={{height: 40, width: 40, marginLeft: 25, top: 10}}/>
          <Text className="font-laimedium" 
                style={{fontSize: 13, textAlign: "center", left: 20, bottom: 42}}>Did you catch the hidden{'\n'}
                reference to Sherlock Holmes{'\n'}
                in Chapter 7?
          </Text>
          <Text style={{left: 35 , bottom: 30}}>___________________________________</Text>

          <Image
          source={require('../../assets/notifications/fire.png')} 
          style={{height: 40, width: 40, marginLeft: 25, top: 10}}/>
          <Text className="font-laimedium" 
                style={{fontSize: 13, textAlign: "center", left: 20, bottom: 42}}>Neil Gaiman’s fan base is{'\n'}
                growing. Follow him for{'\n'}
                magical updates!
          </Text>
          <Text style={{left: 35 , bottom: 30}}>___________________________________</Text>

          <Image
          source={require('../../assets/notifications/sun.png')} 
          style={{height: 40, width: 40, marginLeft: 25, top: 10}}/>
          <Text className="font-laimedium" 
                style={{fontSize: 13, textAlign: "center", left: 20, bottom: 42}}>You’ve dipped into sci-fi,{'\n'}
                romance, and mystery.{'\n'}
                What's next?
          </Text>
          <Text style={{left: 35 , bottom: 30}}>___________________________________</Text>

        </ScrollView>
        </View>
        </View>
     
    </SafeAreaView>
  )
}

export default Notification