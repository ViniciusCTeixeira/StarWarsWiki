import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
    },
    text_center:{
        alignItems: 'center',
    },
    content_center: {
        justifyContent: 'center',
    },
    text_sm: {
        fontSize: 10
    },
    text_lg: {
        fontSize: 18
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 5,
    }
});

export default Styles;