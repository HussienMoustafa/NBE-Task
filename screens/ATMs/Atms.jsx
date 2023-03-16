import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import styles from './Atms.style';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import {useNavigation} from '@react-navigation/native';
// import Geolocation from 'react-native-geolocation-service';

export default function Atms() {
  // const navigation = useNavigation();
  // Geolocation.setRNConfiguration(config);

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  function getCurrentPosition() {
    Geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      setLat(lat);
      setLong(long);
      console.log(lat);
      console.log(long);
    });
    console.log(lat);
    console.log(long);
    // Geolocation.getCurrentPosition(position => {
    //   console.log(position);

    //   // this.getPlaces();
    // });
  }
  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          // 30.075514490199105, 31.284958005893966
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle}>
        <Marker
          draggable
          coordinate={{
            latitude: lat,
            longitude: long,
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={'Current Location'}
          description={'This is a description of the marker'}
        />

        {/* <Marker
          draggable
          coordinate={{
            latitude: 30.070379300592883,
            longitude: 31.28141865091193,
          }}
          onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
          title={'atm1'}
          description={'This is a description of the marker'}
        /> */}
      </MapView>
    </View>
  );
}

const mapStyle = [
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{visibility: 'off'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [{visibility: 'off'}],
  },
];
