import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 60,
        alignItems: "center"
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textos: {
        padding:10
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalContainer: {
        margin: 20,
        backgroundColor: '#121000',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttons:{
        display: "flex",
        flexDirection:'row',
        justifyContent:'space-around'
    }
})