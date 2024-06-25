import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import ListingData from '@/data/destinations.json'
import { ListingsType } from '@/types/listingsTypes'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const ListingDetails = () => {

    const {id} = useLocalSearchParams()

    const listings = ListingData[id]

    const router = useRouter()

    return (
        <>
        <Stack.Screen options={{
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                    <View style={{backgroundColor: Colors.secondory, padding: 8, borderRadius: 10}}>
                        <Feather name='arrow-left' size={24} color={Colors.textColor} />
                    </View>
                </TouchableOpacity>
            ),
            headerRight: () => (
        <TouchableOpacity onPress={() => {}}>
                    <View style={{backgroundColor: Colors.secondory, padding: 8, borderRadius: 10}}>
                        <Ionicons name='bookmark-outline' size={24} color={Colors.textColor} />
                    </View>
                </TouchableOpacity>
            )
        }} />

        <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 150}}>
            <Image source={{uri: listings.image}} style={{width: 410, height: 300}} />

            <View style={styles.contentWrapper}>
            
                <Text style={styles.listingName}>{listings.name}</Text>

                <View style={styles.listingNamelocationWrapper}>
                    <FontAwesome name='map-marker' size={30} color={Colors.secondory} />
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>{listings.location}</Text>
                </View>

                <View style={{flexDirection: 'row', gap: 15}}>

                <View style={styles.hilightWrapper}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.highlightIcon}>
                            <Ionicons name='time' size={25}  />
                        </View>

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 14}}>Duration</Text>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{listings.duration} Days</Text>
                        </View>
                        
                    </View>

                    

                </View>

                <View style={styles.hilightWrapper}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.highlightIcon}>
                            <Ionicons name='star' size={25}  />
                        </View>

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 14}}>Ratings</Text>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{listings.rating}</Text>
                        </View>
                        
                    </View>



                </View>

                <View style={styles.hilightWrapper}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.highlightIcon}>
                            <FontAwesome name='users' size={25}  />
                        </View>

                        <View style={{marginLeft: 10}}>
                            <Text style={{fontSize: 14}}>Reviews</Text>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{listings.reviews} Days</Text>
                        </View>
                        
                    </View>



                </View>

                </View>

                <Text style={{lineHeight: 25, letterSpacing: 0.5}}>{listings.description}</Text>

                <Text style={{marginTop: 20, fontSize: 20, color: Colors.textColor, fontWeight: 'bold'}}>Price: $ {listings.price}</Text>

          
            </View>

            </ScrollView>

        </View> 
     

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => {}} style={styles.footerBtn} >
                <Text style={styles.footerBtnTxt}>Book Now</Text>
            </TouchableOpacity>
        </View>
     
        </>
    )

}

export default ListingDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },

    listingName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.textColor,
        letterSpacing: 0.5
    },

    contentWrapper: {
        padding: 20
    },

    listingNamelocationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        gap: 5
    },

    hilightWrapper: {
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: Colors.secondory,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 20,
        padding: 10,
    },

    highlightIcon: {
        marginTop: 8
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        width: 415,
        padding: 20,
        paddingBottom: 30
    },

    footerBtn: {
        backgroundColor: Colors.secondory,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    footerBtnTxt: {
        color: Colors.textColor,
        fontWeight: 'bold',
        fontSize: 16
    }

    
   
})











