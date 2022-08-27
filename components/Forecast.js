import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function Forecast(props) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.textforMain}>{props.main}</Text>

            <View style = {styles.container}>
                <Text style = {styles.textStyle}>{props.description}</Text>
            </View>
            
            <View style = {styles.container}>
                <Text style = {styles.textNUM} >{props.temp} °C</Text>
            </View>
            
        </View >

        
    );
}


const styles = StyleSheet.create({

    container: {

        // justifyContent: 'space-evenly',
        // backgroundColor: 'black',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight
        
       

    },

    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

    textforMain: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
        

    },

    textNUM: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'

    }






});