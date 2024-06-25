import { StyleSheet, View, Text, ListRenderItem, FlatList, Image } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListings = ({listings}: {listings: GroupType[]}) => {

  const renderItem:ListRenderItem<GroupType> = ({item}) => {
    return (
      <View  style={styles.item}>
        <Image source={{uri: item.image}} style={{width: 100, height: 100, borderRadius: 10}} />
        <View>
          <Text style={styles.itemTxt}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8}}>
            <Ionicons name='star' size={18} color={Colors.secondory} />
            <Text style={styles.itemrating}>{item.rating}</Text>
          </View>

          <Text style={styles.itemreviews}>({item.reviews}) Reviews</Text>

        </View>
      </View>
    )
  }

  return (
    <View>
      <Text style={styles.headingTitle}>Top Travel Groups</Text>
      <FlatList data={listings} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({
  item: {
    margin: 10,
    borderColor: Colors.secondory,
    borderWidth: 2.5,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },

  headingTitle: {
    color: Colors.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },

  itemTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.textColor,
    marginBottom: 5
  },

  itemrating: {
    color: Colors.textColor,
  },

  itemreviews: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: 'bold'
  }
})