import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const Page = () => {
  return (
    <Stack.Screen options={{ headerTransparent: true, headerTitle: '', headerLeft: () => (
      <TouchableOpacity onPress={() => {}} style= {{marginLeft: 20}}>
        <Image source={{uri: 'https://static.vecteezy.com/system/resources/previews/026/829/465/non_2x/beautiful-girl-with-autumn-leaves-photo.jpg'}} style={{width: 50, height: 50, borderRadius: 50}} />
      </TouchableOpacity>
   ),
   headerRight: () => (
    <TouchableOpacity onPress={() => {}} style={{marginRight: 20, marginTop: -12, backgroundColor: Colors.secondory, padding: 10, borderRadius: 50, shadowColor: '#E0E0E0', shadowOffset:  { width:2, height:4 }, shadowOpacity: 0.2, shadowRadius: 3}}>
      <Ionicons name='notifications' size={20} color='#000000' />
    </TouchableOpacity>
   ) }}  />
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})