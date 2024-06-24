import {StyleSheet,  View, Text, FlatList, ListRenderItem, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ListingsType } from '@/types/listingsTypes'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

type Props = {
    listings: any[]
}


const Listings = ({listings}: Props) =>{

    const renderItem:ListRenderItem<ListingsType> = ({item}) => {
        return(
            <TouchableOpacity>
                <View style={styles.item}>
                    <Image source={{uri: item.image}} style={{width: 200, height: 200, borderRadius: 10, marginBottom: 20}} />

                    <View style={styles.bookmark}>
                        <Ionicons name='bookmark' size={20} color='black' />
                    </View>

                    <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <FontAwesome name='map-marker' size={22} color={Colors.secondory} />
                            <Text style={styles.itemLocation}>{item.location}</Text>
                        </View>

                        <Text style={{fontSize: 13, color: Colors.secondory, fontWeight: 800, marginVertical: 5}}>${item.price}</Text>

                    </View>

                </View>
            </TouchableOpacity>
        )
    }

  return (
    <View>
      <FlatList horizontal     showsHorizontalScrollIndicator={false} 
        data={listings}
        renderItem={renderItem} 
        />
    </View>
  )
}

export default Listings

const styles = StyleSheet.create({
    item: {
        margin: 10,
        borderRadius: 10,
        shadowColor: '#E0E0E0',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: '#FFFFFF',
        padding: 10
    },

    bookmark: {
        position: 'absolute',
        right: 20,
        top: 180,
        backgroundColor: Colors.secondory,
        padding: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white'
    },

    itemLocation: {
        color: Colors.textColor,
        fontSize: 13,
        marginLeft: 5
    }

})