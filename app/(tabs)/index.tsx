import SearchBox from "@/components/SearchBox";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/constants/color";
import MyCarousel from "@/components/MyCarousel";
import CategoryButtons from "@/components/CategoryButtons";
import { useEffect, useState } from "react";
import { ProductType } from "@/types/type";
import ProductCard from "@/components/ProductCard";

export default function Index() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search_box_container}>
        <View style={styles.search_box}>
          <SearchBox />
        </View>

        <View style={styles.heart_icon}>
          <AntDesign name="hearto" size={20} color="black" />
        </View>
      </View>

      <ScrollView
        style={styles.scroll_container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.popular_header}>
          <Text style={{ fontSize: 15, fontWeight: 500, color: colors.black }}>Popular Item</Text>
          <Text style={{ fontWeight: 400, color: colors.text }}>See all</Text>
        </View>

        <View>
          <MyCarousel />
        </View>

        <View style={{ marginTop: 20 }}>
          <CategoryButtons />
        </View>

        <View style={styles.product_container}>
          {
            products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  search_box_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },

  search_box: {
    width: '85%',
  },

  heart_icon: {
    width: 40,
    height: 40,
    backgroundColor: colors.gray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  scroll_container: {
    paddingHorizontal: 20,
  },

  popular_header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  product_container: {
    marginTop: 20,
    flex: 1,
    gap: 20,
  }
})
