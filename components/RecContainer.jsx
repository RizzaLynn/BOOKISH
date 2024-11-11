import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RecContainer = props => {
    return (
        <View style={{...styles.RecContainer, ...props.style}}>
            {props.children}
        </View>
      )
    }
    
    const styles = StyleSheet.create({
        RecContainer:{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            height: 1275,
            margin: 20,
            backgroundColor: '#A5B4FC',
            borderRadius: 10,
            bottom: 35,
        }
    });

export default RecContainer
