import { StyleSheet, View} from 'react-native';
import React from 'react'

const BoxContainer = props => {
  return (
    <View style={{...styles.boxContainer, ...props.style}}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    boxContainer:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor: "#5C6BC0",
        height: 75,
        width: 75,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    }
    });

export default BoxContainer