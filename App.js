import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>🤍</Text>
      <Welcome firstName={'G'}/>
      <Counter/>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  bigText:{
    fontSize: '100vw',
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
