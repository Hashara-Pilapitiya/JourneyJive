import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useRef} from 'react'
import Colors from '@/constants/Colors'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
  onCategoryChange: (category: string) => void
}

const CategoryButtons = ({onCategoryChange}: Props) => {

    const scrollRef = useRef<ScrollView>(null)

    const itemRef = useRef<TouchableOpacity[]>([])

    const [activeIndex, setActiveIndex] = React.useState(0)

    const handleSelectCategory = (index: number) => {

      const selected = itemRef.current[index]

       setActiveIndex(index)

       selected?.measure((x) => {
           scrollRef.current?.scrollTo({x: x , y: 0, animated: true})
       })

        onCategoryChange(destinationCategories[index].title)
    }

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 10, paddingVertical: 10, marginBottom: 10}}>
        {destinationCategories.map((category, index) => (
            <TouchableOpacity key={index} ref={(el) => itemRef.current[index] == el} onPress={() => handleSelectCategory(index)} style={activeIndex === index ? styles.caregoryBtnActive : styles.caregoryBtn} >
                <MaterialCommunityIcons name={category.icon as any} size={24} color={Colors.textColor} />
            <Text style={activeIndex === index ? styles.caregoryBtnTxtActive : styles.caregoryBtnTxt}>{category.title}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryButtons

const styles = StyleSheet.create( {
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textColor,
    marginTop: 20,
  },

    caregoryBtn: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondory,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginRight: 10,
    },

    caregoryBtnTxt: {
        color: Colors.textColor,
        marginLeft: 5,
        fontWeight: 'bold',
    },

    caregoryBtnActive: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginRight: 10,
    },

    caregoryBtnTxtActive: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})