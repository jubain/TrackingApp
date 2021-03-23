//import '../mockLocation'
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)

  const [error] = useLocation(addLocation)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a track</Text>
      <Map />
      {error ? <Text>Please enable location service</Text> : null}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
