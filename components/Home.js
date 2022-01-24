import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import styles from '../styles';
import Item from './Item';


export default function Home({data}) {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data} 
                renderItem={({ item }) => <Item data={item} />}
            />
        </SafeAreaView>
    );
};