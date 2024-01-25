import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        top: -20,
        paddingHorizontal: 20, // Add horizontal padding for better spacing
    },
    headerView: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subheaderView: {
        position: 'absolute',
        top: '40%',
        left: -80,
        transform: [{ rotate: '-90deg' }],
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerView: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    input: {
        width: '80%',
        flex: 0.08,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        margin: 15,
        fontSize: 16,
        fontFamily: 'ChalkboardSE-Regular', // Replace with the actual font family name
      },
    
    button: {
        backgroundColor: '#ffcc00',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#ff9900',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'ChalkboardSE-Regular', // Replace with the actual font family name
        marginLeft: 10,
    },
    pressedButton: {
        backgroundColor: '#ff9900', // Darker yellow when pressed
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: 'orange', // Border color for pressed state
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'ChalkboardSE-Regular',
    },
    subHeaderText: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'ChalkboardSE-Regular',

    },
    bodyText: {
        fontSize: 16,
        fontFamily: 'ChalkboardSE-Regular', 
        marginBottom: 10, 
        lineHeight: 56,
    },
    dynamicText: {
        fontSize: 18,
        fontFamily: 'ChalkboardSE-Regular', 
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 10, 
        lineHeight: 56,
    },

    signatureText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    welcomeText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'ChalkboardSE-Regular', // Replace with the actual font family name
        color: '#333', // Adjust the color as needed
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
    },


});

export default styles;