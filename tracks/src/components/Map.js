import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

function Map(props) {
    const { state: { currentLocation } } = useContext(LocationContext)
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    // const initialLocation = {
    //     longitude: -122.0312186,
    //     latitude: 37.33233141,
    // };

    return (
        <MapView style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={250}
                strokeColor="rgb(158,158,255,1.0)"
                fillColor="red"
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 400
    }
})

export default Map;