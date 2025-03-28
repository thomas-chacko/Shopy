import React, { useState, useRef } from "react";
import { Dimensions, Image, View, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
const carousel1 = require("@/assets/images/carousel1.jpg")
const carousel2 = require("@/assets/images/carousel2.jpg")
const carousel3 = require("@/assets/images/carousel3.jpg")

const { width } = Dimensions.get("window");

const data = [carousel1, carousel2, carousel3];

export default function MyCarousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef(null);

    const renderPagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {data.map((_, index) => (
                    <View 
                        key={index} 
                        style={[
                            styles.paginationDot, 
                            activeSlide === index && styles.activePaginationDot
                        ]} 
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                loop
                width={width - 40}
                height={200}
                autoPlay={true}
                autoPlayInterval={5000}
                data={data}
                scrollAnimationDuration={2000}
                onSnapToItem={(index) => setActiveSlide(index)}
                renderItem={({ item }) => (
                    <View style={styles.slideContainer}>
                        <Image 
                            source={item} 
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>
                )}
                style={styles.carousel}
            />
            {renderPagination()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    carousel: {
        borderRadius: 10,
    },
    slideContainer: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 5,
    },
    activePaginationDot: {
        backgroundColor: 'black',
        width: 20,
    }
});