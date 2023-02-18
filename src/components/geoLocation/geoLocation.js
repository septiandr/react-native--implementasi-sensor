import React, { useEffect, useState } from 'react';
import { View, Text , StyleSheet} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import { useAtom } from 'jotai';
import { DataSensor } from '../../store/store';


const GeoSensor = () => {
    const [location, setLocation] = useAtom(DataSensor);
    const [error, setError] = useState(null);

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Permission Required',
                    message: 'This app needs access to your location to show your current location on the map.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK'
                },
                );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Location permission granted.');
            } else {
                console.log('Location permission denied.');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                setLocation((prev)=>({
                    ...prev,
                    gps:{
                        latitute:position.coords.latitude,
                        longitude:position.coords.longitude
                    }
                }));
            },
            error => {
                setError(error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
    };

    useEffect(() => {
        requestLocationPermission();
        getLocation();
    }, []);

    if (location) {
        return (
            <View style ={styles.container}>
                <Text>GPS info: </Text>
                <Text>Latitude: {location.gps.latitute}</Text>
                <Text>Longitude: {location.gps.longitude}</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View>
            <Text>Loading location...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom:20,
        marginTop: 0,
        backgroundColor: '#F5FCFF',
        width: '80%',
        height: 100,
        paddingLeft: 10,
        paddingTop: 10,
        borderRadius: 10
    },
    });

export default GeoSensor;
