import { StyleSheet, View} from 'react-native';
import React from 'react'

const GenreContainer = props => {
  return (
    <View style={{...styles.GenreContainer, ...props.style}}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    GenreContainer:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height: 100,
        margin: 20,
        backgroundColor: '#A5B4FC',
        borderRadius: 10,
        bottom: 20
    }
    });

export default GenreContainer