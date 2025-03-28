import SearchBox from "@/components/SearchBox";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from "@/constants/color";
import MyCarousel from "@/components/MyCarousel";
import CategoryButtons from "@/components/CategoryButtons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.search_box_container}>
        <View style={styles.search_box}>
          <SearchBox />
        </View>

        <View style={styles.heart_icon}>
          <AntDesign name="hearto" size={20} color="black" />
        </View>
      </View>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  search_box_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
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

  popular_header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
