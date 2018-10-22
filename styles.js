import {Platform, StyleSheet} from "react-native";

function getFont() {
    return Platform.OS === 'ios' ? 'American Typewriter' : 'Roboto';
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        height: 48,
        width: 'auto',
        lineHeight: 44,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
        fontFamily: getFont(),
        borderWidth: 2,
        borderColor: '#DDBB66',
        fontSize: 16,
        fontWeight: '400',
        color:'#405966',
        backgroundColor: '#DDBB66',
        ...Platform.select({
            android: {
                borderRadius: 50,
            },
            ios: {
                borderRadius: 25,
                overflow: 'hidden',
            },
        }),

    },
    generatedBs: {
        marginTop: 15,
        marginBottom: 15,
        color: '#405966',
        fontSize: 16,
        fontFamily: getFont(),
        textAlign: 'center'
    },
    imgView: {
        flex: 1,
        top: 0,
        left: 0,
        alignItems: 'center'
    },
    boss: {
        resizeMode: 'contain',
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 15
    },
    share: {
        width: 26,
        height: 26
    }
});

export default styles;