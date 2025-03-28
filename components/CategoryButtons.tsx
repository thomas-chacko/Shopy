import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/color'

const CategoryButtons = () => {
    const categorys = [
        "All",
        "Electronics",
        "Men's Clothing",
        "Women's Clothing",
        "Jewelery",
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={categorys}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Text style={styles.category}>{item}</Text>}
            />
        </View>
    )
}

export default CategoryButtons

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    category: {
        marginHorizontal: 12,
        fontSize: 15,
        fontWeight: 600,
        color : colors.text,
    }
})
