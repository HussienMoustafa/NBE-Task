import React, {useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {camera} from '../../assets/Images/Untitled/Untitled';
import styles from './UploadImage.style';

export default function UploadImage({setResponse}) {
  function imgHandler() {
    setImage(null);
  }
  const [image, setImage] = useState(null);

  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        const source = {
          uri: 'data:image/jpeg;base64,' + response.assets[0].base64,
        };
        setImage(source);
        setResponse(response);
      }
    });
  };

  return (
    <View>
      <Pressable onPress={selectImage} style={styles.camera}>
        {image !== null ? (
          <Image source={{uri: image.uri}} style={styles.imageBox} />
        ) : (
          <Image style={styles.cameraImg} source={{uri: camera}} />
        )}
      </Pressable>
    </View>
  );
}
