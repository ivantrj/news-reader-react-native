import { StatusBar } from 'expo-status-bar';
import { Text, View, Linking, Image, Button } from 'react-native';
import styles from '../styles';

const readFullArticle = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }


export default function Item ({ data }) {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={{ uri: data.urlToImage }} />
        <Text style={styles.itemTitle}>
          {data.title}
        </Text>
        <Text style={styles.itemDescription}>
          {data.description}
        </Text>
        <View style={styles.itemBtn}>
          <Button onPress={() => { console.log("Button pressed!") }} title="Read" />
        </View>
      </View>
    )
  }