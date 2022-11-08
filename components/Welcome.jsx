import React from 'react'
import {Text, StyleSheet, View} from 'react-native'


export default function Welcome({firstName}){
    return(
        <View styles={styles.viewStyle}>
            <Text style={styles.largeText}>Welcome {firstName}✨</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    largeText: {
        fountSize:70,
        fontWeight: '500',
        corlor: 'balck'
    }, viewStyle:{
        fontSize:70,
        color:'black '
    }
})