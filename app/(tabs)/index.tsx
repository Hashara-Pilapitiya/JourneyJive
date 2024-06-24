import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButtons from '@/components/CategoryButtons'

const Page = () => {

  const headerHegiht = useHeaderHeight()

  return (
    <>
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

   <View style={[styles.container, {paddingTop: headerHegiht}]}>
    <Text style={styles.headingTxt}>Discover Your Next Adventure!</Text>

    <View style={styles.searchSectionWrapper}>
      <View style={styles.searchBar}>
        <Ionicons name='search' size={20} color={Colors.textColor} />
        <TextInput placeholder='Search...' />
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name='options' size={28} color={Colors.textColor} />
      </TouchableOpacity>
   </View>

    <CategoryButtons />

   </View>

   </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  headingTxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textColor,
    marginTop: 20,
    letterSpacing: 0.5
  },

  searchSectionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    gap: 5
  },

  searchBar: {
    borderColor: Colors.secondory,
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgColor,
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    flex: 1,
    gap: 10
  }
})