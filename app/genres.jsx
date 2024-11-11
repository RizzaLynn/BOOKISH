import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'

const genres = () => {
  return (
    <SafeAreaView className="bg-indigo-200">
      <ScrollView>
        <View className="items-center justify-center">
          <Text className="font-laisemibold text-2xl mt-2">GENRES</Text>

          <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#A5B4FC',
            height: 120,
            width: 325,
            bottom: 5, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../assets/genres/crime.jpg')} 
                style={{height: 85, width: 85, right: 110, top: 40, borderRadius: 60}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 20, left: 45, bottom: 45}}>CRIME</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, textAlign: "center", left: 45, bottom: 42}}>Crime is the genre of fiction that deals {'\n'} 
                with crimes, their detection, criminals, and {'\n'}
                their motives.
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#A5B4FC',
            height: 120,
            width: 325,
            bottom: 30, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../assets/genres/fantasy.png')} 
                style={{height: 85, width: 85, right: 110, top: 45, borderRadius: 60}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 20, left: 45, bottom: 45}}>FICTION</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, textAlign: "center", left: 45, bottom: 42}}>Fiction focuses on a self-contained {'\n'}
                incident or series of linked incidents, with {'\n'} 
                the intent of evoking a single effect or {'\n'}
                mood.
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#A5B4FC',
            height: 120,
            width: 325,
            bottom: 55, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../assets/genres/romance.png')} 
                style={{height: 85, width: 85, right: 110, top: 45, borderRadius: 60}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 20, left: 45, bottom: 45}}>ROMANCE</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, textAlign: "center", left: 45, bottom: 42}}>A romance is a work in which the plot{'\n'}
                centers around a love relationship and {'\n'}
                draws its power from the feeling of {'\n'}
                 falling in love.
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#A5B4FC',
            height: 120,
            width: 325,
            bottom: 80, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../assets/genres/self-help.png')} 
                style={{height: 85, width: 85, right: 110, top: 38, borderRadius: 60}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 20, left: 45, bottom: 47}}>SELF-HELP</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, textAlign: "center", left: 45, bottom: 44}}>Self-help book is one that is written with{'\n'}
                the intention to instruct its readers on{'\n'}
                solving personal problems.
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#A5B4FC',
            height: 120,
            width: 325,
            bottom: 105, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../assets/genres/horror.png')} 
                style={{height: 85, width: 85, right: 110, top: 38, borderRadius: 60}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 20, left: 45, bottom: 47}}>HORROR</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, textAlign: "center", left: 45, bottom: 44}}>Horror is a genre of literature, film, and{'\n'}
                television that is meant to scare, startle,{'\n'}
                shock, and even repulse audiences.
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#A5B4FC',
            height: 120,
            width: 325,
            bottom: 130, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../assets/genres/thrill.png')} 
                style={{height: 85, width: 85, right: 110, top: 38, borderRadius: 60}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 20, left: 45, bottom: 47}}>THRILLER</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, textAlign: "center", left: 45, bottom: 44}}>Thriller is a genre of fiction with numerous,{'\n'}
                often overlapping, subgenres, including{'\n'}
                crime, horror, and detective fiction.
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#A5B4FC',
            height: 120,
            width: 325,
            bottom: 155, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../assets/genres/mystery.png')} 
                style={{height: 85, width: 85, right: 110, top: 45, borderRadius: 60}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 20, left: 45, bottom: 45}}>MYSTERY</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, textAlign: "center", left: 45, bottom: 42}}>Mystery is  a genre of fiction that follows{'\n'} 
                a crime (like a murder or a disappearance){'\n'}
                from the moment it is committed to{'\n'}
                the moment it is solved.
            </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#A5B4FC',
            height: 120,
            width: 325,
            bottom: 180, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../assets/genres/adventure.jpg')} 
                style={{height: 85, width: 85, right: 110, top: 38, borderRadius: 60}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 20, left: 45, bottom: 45}}>MYSTERY</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, textAlign: "center", left: 45, bottom: 42}}>Adventure is a type of fiction that usually{'\n'}
                presents danger, or gives the reader{'\n'}
                a sense of excitement.
            </Text>
            </View>
            </TouchableOpacity>

        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default genres

const styles = StyleSheet.create({})