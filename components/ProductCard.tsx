import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/color'
import { ProductType } from '@/types/type'

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: product.image }}
          style={{ width: '100%', height: 400, resizeMode: 'contain', borderRadius: 20 }}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{product.title}</Text>

        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 10 }}>
          <Text style={styles.price}>${parseInt(product.price)}</Text>
          <Text style={{ textDecorationLine: 'line-through', color: colors.black, fontSize: 20 }}>${parseInt(product.price + 50)}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    paddingVertical: 10
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
