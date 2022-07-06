import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
    text_center:{
        alignItems: 'center',
    },
    content_center: {
        justifyContent: 'center',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 5,
    }
});

export default Styles;