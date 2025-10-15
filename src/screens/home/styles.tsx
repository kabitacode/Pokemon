import { StyleSheet } from 'react-native';
import { themeColors, themeFonts } from '../../utils/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white
    },
    wrapper: {
        paddingBottom: 20
    },
    containerLoading: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: themeColors.white
    },
    header: {
        backgroundColor: themeColors.primary,
        padding: 20,
        marginBottom: 20,
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: themeColors.white,
        borderBottomColor: themeColors.gray,
        borderBottomWidth: 2,
        marginHorizontal: 10,
        marginBottom: 10,
        paddingBottom: 10
    },
    text: {
        fontSize: themeFonts.title,
        color: themeColors.typography,
        fontWeight: "800"
    },
    textTitle: {
        fontSize: themeFonts.title,
        color: themeColors.white,
        fontWeight: "800"
    }
});

export default styles;   