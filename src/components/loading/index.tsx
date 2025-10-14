import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../../utils/theme';


const Loading = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator size={'large'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: themeColors.white
    },
})

export default Loading;