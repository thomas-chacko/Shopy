import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { colors } from '@/constants/color';
import Feather from '@expo/vector-icons/Feather';

const SearchBox = () => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <View style={[styles.container, isFocused && styles.focusedContainer]}>
            <TextInput
                style={styles.input_box}
                placeholder='Search'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                underlineColorAndroid="transparent"
            />
            <Feather name='search' size={25} color='black' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 50,
        backgroundColor: colors.gray,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    focusedContainer: {
        borderColor: 'transparent',
    },
    input_box: {
        flex: 1,
        height: 40,
        padding: 10,
        borderRadius: 50,
        backgroundColor: colors.gray,
        borderWidth: 0,
        fontSize: 16,
        letterSpacing: 0.2,
        outlineStyle: 'none',
    },
});

export default SearchBox;
