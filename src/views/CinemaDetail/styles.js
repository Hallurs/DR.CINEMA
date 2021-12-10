import { StyleSheet } from "react-native";
import { periwinkle, coolcolor } from "../../styles/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        marginTop: 30,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: coolcolor
    },
    nameText: {
        fontSize: 25,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
      },
    buttonText: {
        color: 'white'
    },
    descriptionTitle: {
        fontSize: 20,
        textDecorationStyle: 'solid',
        textAlign: 'center',
        paddingTop: 15
    },
    descriptionText: {
        fontSize: 15,
        textAlign: 'center'
    },
});