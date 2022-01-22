import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Home({data}) {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data} 
                renderItem={({ item }) => <Item data={item} />}
            />
        </View>
    );
}

const Item = ({ data }) => {
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });