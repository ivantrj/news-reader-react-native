import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemContainer: {
      // borderWidth: 0,
      borderRadius: 6,
      padding: 5,
      elevation: 8,
      backgroundColor: '#fff',
      shadowOffset: { width: 0, height: 0},
      shadowColor: '#333',
      shadowOpacity: 1,
      shadowRadius: 5,
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
    },
    itemImage: {
      height: 200,
      marginTop: 20,
      marginBottom: 20,
  
    },
    itemTitle: {
      textAlign: "justify",
      padding: 10,
      fontSize: 20,
      color: 'black',
      backgroundColor: 'white',
      fontWeight: 'bold',
    },
    itemDescription: {
      fontSize: 17,
      padding: 10,
      color: 'black',
      backgroundColor: 'white',
    },
    // itemBtn: {
    //   paddingBottom: 40,
    // }
  });
  