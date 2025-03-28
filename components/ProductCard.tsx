import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/color'

export default function ProductCard() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
          style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 20 }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={styles.title}>Mens Casual Premium Slim Fit T-Shirts</Text>

        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 10 }}>
          <Text style={styles.price}>$100</Text>
          <Text style={{ textDecorationLine: 'line-through', color: colors.black, fontSize: 20 }}>$80</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 700,
    color: colors.black,
  },

  price: {
    fontSize: 20,
  }
})
