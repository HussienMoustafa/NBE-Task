import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import PushNotification, {Importance} from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: 'channel-id', // (required)
    channelName: 'My channel', // (required)
    playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  //   created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

export default function NotificationController() {
  //   console.log(555555555);
  useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      // console.log('Message being tested ', remoteMessage);
      PushNotification.localNotification({
        channelId: 'channel-id',
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
      });
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      // console.log('Message handled in the background!', remoteMessage);
      PushNotification.localNotification({
        channelId: 'channel-id',
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
      });
    });
    // return unSubscribe;
  }, []);
  return null;
}
