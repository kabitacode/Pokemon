import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native'

const Empty = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/empty.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "20%"
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "cover"
    }
})

export default Empty