import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import RecContainer from '../../components/RecContainer'

const Home = () => {
  return (
    <SafeAreaView className="bg-indigo-200">
      <ScrollView>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: "center"}}>
        <Image
          source={require('../../assets/lines.png')} 
          style={{height: 40, width: 40, marginLeft: 20,}}/>
        <Image
          source={require('../../assets/bookishlogo.png')} 
          style={{height: 60, width: 130, left: 55}}/>
        </View>

        <View style={{alignItems: "center", marginTop: 15}}>
        <TextInput
        backgroundColor='#A5B4FC'
        className={`text-xs border-none rounded-md pl-[10px] h-10`}
        style={{width: 315}}/>
        <Image
          source={require('../../assets/search.png')} 
          style={{height: 20, width: 20, left: 140, bottom: 30}}/>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: "center"}}>
          <Text className="font-laibold" style={{fontSize: 16, left: 25, bottom: 7, marginBottom: 7}}>GENRES</Text>
          <Link className="font-laimedium" style={{fontSize: 16, bottom: 7, marginBottom: 7, left: 175}}
          href="/genres">see more ...</Link>
        </View>

        <View>
          <ScrollView className="bg-[#A5B4FC]" horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    height: 100,
                    width: 320,
                    margin: 20,
                    backgroundColor: '#A5B4FC',
                    borderRadius: 10,
                    bottom: 20
          }}>
          <View>
            <TouchableOpacity style={{width: 150, bottom: 6}}>
              <Image source={require('../../assets/genres/crime.jpg')} 
              style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
              <Text className="font-laibold" style={{ fontSize: 17, left: 60, bottom: 18}}>CRIME</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: 140, bottom: 24}}>
              <Image source={require('../../assets/genres/fantasy.png')} 
              style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
              <Text className="font-laibold" 
              style={{ fontSize: 17, left: 60, bottom: 18}}>FICTION</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={{width: 175, bottom: 6}}>
              <Image source={require('../../assets/genres/romance.png')} 
              style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
              <Text className="font-laibold" style={{ fontSize: 17, left: 60, bottom: 18}}>ROMANCE</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={{width: 140, bottom: 24}}>
              <Image source={require('../../assets/genres/self-help.png')} 
              style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
              <Text className="font-laibold" 
              style={{ fontSize: 17, left: 60, bottom: 18}}>SELF-HELP</Text>
          </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity style={{width: 160, bottom: 6}}>
              <Image source={require('../../assets/genres/horror.png')} 
              style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
              <Text className="font-laibold" 
              style={{ fontSize: 17, left: 60, bottom: 18}}>HORROR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: 140, bottom: 24}}>
              <Image source={require('../../assets/genres/thrill.png')} 
              style={{height: 40, width: 40, top: 12, left: 10, borderRadius: 40}}/>
              <Text className="font-laibold" 
              style={{ fontSize: 17, left: 60, bottom: 18}}>THRILL</Text>
            </TouchableOpacity>
          </View>
    
        </ScrollView>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', alignItems: "center"}}>
          <Text className="font-laibold" 
          style={{fontSize: 16, left: 28, bottom: 25, marginBottom: 7}}>RECOMMENDATIONS</Text>
        </View>

        <View>
          
          <RecContainer>
            <TouchableOpacity>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#c4b5fd',
            height: 150,
            width: 275,
            bottom: 5, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../../assets/books/it-ends.png')} 
                style={{height: 120, width: 80, right: 85, top: 40}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 15, left: 45, bottom: 65}}>IT ENDS WITH US</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 45, bottom: 60}}>By Coleen Hoover</Text>
            <Image source={require('../../assets/5stars.png')} 
                style={{height: 12, width: 65, left: 47, bottom: 53}}/>
            <Image source={require('../../assets/view.png')} 
                style={{height: 15, width: 15, left: 30, bottom: 47}}/>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 53, bottom: 62}}>23.8k</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{bottom: 10}}>
            <View style={{
            borderRadius: 10,
            backgroundColor: '#c4b5fd',
            height: 150,
            width: 275,
            bottom: 5, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../../assets/books/greminder.png')} 
                style={{height: 120, width: 80, right: 85, top: 40}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 14, left: 45, bottom: 65}}>A GENTLE REMINDER</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 45, bottom: 60}}>By Bianca Sparacino</Text>
            <Image source={require('../../assets/5stars.png')} 
                style={{height: 12, width: 65, left: 47, bottom: 53}}/>
            <Image source={require('../../assets/view.png')} 
                style={{height: 15, width: 15, left: 30, bottom: 47}}/>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 53, bottom: 62}}>33.2k</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 20}}>
        <View style={{
            borderRadius: 10,
            backgroundColor: '#c4b5fd',
            height: 150,
            width: 275,
            bottom: 5, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../../assets/books/hpotter.jpg')} 
                style={{height: 120, width: 80, right: 85, top: 52}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 15, left: 45, bottom: 65}}>HARRY POTTER AND {'\n'}  THE CURSE CHILD</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 45, bottom: 60}}>By J.K Rowling</Text>
            <Image source={require('../../assets/4stars.png')} 
                style={{height: 12, width: 65, left: 47, bottom: 53}}/>
            <Image source={require('../../assets/view.png')} 
                style={{height: 15, width: 15, left: 30, bottom: 47}}/>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 53, bottom: 62}}>5.4k</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 30}}>
        <View style={{
            borderRadius: 10,
            backgroundColor: '#c4b5fd',
            height: 150,
            width: 275,
            bottom: 5, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../../assets/books/therain.jpg')} 
                style={{height: 120, width: 80, right: 85, top: 39}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 15, left: 45, bottom: 65}}>THE RAIN IN ESPAÑA</Text>
            <Text className="font-laimdeium" 
                style={{fontSize: 10, left: 45, bottom: 60}}>By 4reuminct</Text>
            <Image source={require('../../assets/4stars.png')} 
                style={{height: 12, width: 65, left: 47, bottom: 53}}/>
            <Image source={require('../../assets/view.png')} 
                style={{height: 15, width: 15, left: 30, bottom: 47}}/>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 53, bottom: 62}}>2.1k</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 40}}>
        <View style={{
            borderRadius: 10,
            backgroundColor: '#c4b5fd',
            height: 150,
            width: 275,
            bottom: 5, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../../assets/books/kpop.jpg')} 
                style={{height: 120, width: 80, right: 85, top: 39}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 15, left: 45, bottom: 65}}>MY KPOP BOYFRIEND</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 45, bottom: 60}}>By Olivia Han</Text>
            <Image source={require('../../assets/5stars.png')} 
                style={{height: 12, width: 65, left: 47, bottom: 53}}/>
            <Image source={require('../../assets/view.png')} 
                style={{height: 15, width: 15, left: 30, bottom: 47}}/>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 53, bottom: 62}}>5.3k</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 50}}>
        <View style={{
            borderRadius: 10,
            backgroundColor: '#c4b5fd',
            height: 150,
            width: 275,
            bottom: 5, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../../assets/books/everyman.jpg')} 
                style={{height: 120, width: 80, right: 85, top: 52}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 15, left: 45, bottom: 65}}>TO EVERYMAN A {'\n'}           BRAIN</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 45, bottom: 60}}>By Coleen Hoover</Text>
            <Image source={require('../../assets/5stars.png')} 
                style={{height: 12, width: 65, left: 47, bottom: 53}}/>
            <Image source={require('../../assets/view.png')} 
                style={{height: 15, width: 15, left: 30, bottom: 47}}/>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 53, bottom: 62}}>11.1k</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 60}}>
        <View style={{
            borderRadius: 10,
            backgroundColor: '#c4b5fd',
            height: 150,
            width: 275,
            bottom: 5, 
            margin: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            }}>
            <Image source={require('../../assets/books/breathess.jpg')} 
                style={{height: 120, width: 80, right: 85, top: 40}}/>
            <Text className="font-laisemibold" 
                style={{fontSize: 15, left: 45, bottom: 65}}>BREATH LESS</Text>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 45, bottom: 60}}>By Amy McCsulloh</Text>
            <Image source={require('../../assets/4stars.png')} 
                style={{height: 12, width: 65, left: 47, bottom: 53}}/>
            <Image source={require('../../assets/view.png')} 
                style={{height: 15, width: 15, left: 30, bottom: 47}}/>
            <Text className="font-laimedium" 
                style={{fontSize: 10, left: 53, bottom: 62}}>6k</Text>
        </View>
        </TouchableOpacity>

          </RecContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})