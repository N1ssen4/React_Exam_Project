import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import { Linking } from 'react-native';

export default function HelpScreen() {
    return (
        <View style={styles.container}>
            <Text onPress={() => Linking.openURL('https://www.cbs.dk/en/library/frequently-asked-questions')}>Check out our FAQ here.</Text>
            <Text>Or you can check the map below for our IT-departments</Text>
            <MapView style={styles.map}>
                <Marker coordinate={
                    {latitude: 55.68168, longitude: 12.52975}
                }
                title={'CBS Frederiksberg'}
                description={'Opening Hours: monday-friday: 08:00-15:00'}/>
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: 400,
        height: 500
    }
})