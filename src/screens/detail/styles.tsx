import { StyleSheet } from 'react-native';
import { themeColors, themeFonts } from '../../utils/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white
    },
    header: {
        backgroundColor: themeColors.white,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: "cover"
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: "cover",
        marginRight: 20
    },
    text: {
        fontSize: themeFonts.typography_2,
        color: themeColors.typography
    },
    textTitle: {
        fontSize: themeFonts.title,
        color: themeColors.typography,
        fontWeight: "800"
    },
    textTitleRow: {
        fontSize: themeFonts.title,
        color: themeColors.typography,
        fontWeight: "800"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: themeColors.gray,
        marginHorizontal: 20,
        paddingBottom: 15,
        paddingTop: 5,
        marginBottom: 10
    },
    imageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    type: {
        flexDirection: "column"
    }
});

export default styles;   