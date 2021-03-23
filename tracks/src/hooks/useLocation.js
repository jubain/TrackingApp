import { useState, useEffect } from 'react'
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (callback) => {
    const [error, seterror] = useState('')

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback
            )
        } catch (e) {
            seterror(e)
        }
    }
    useEffect(() => {
        startWatching()
    }, [])
    return [error]
}