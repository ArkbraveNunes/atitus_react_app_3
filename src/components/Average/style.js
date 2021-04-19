import { StyleSheet } from "react-native";

const createStyle = (obj) => StyleSheet.create(obj);

export default {
    screen: createStyle({
        background: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        },
        container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          // paddingBottom: 50,
        },
    }),
    table: createStyle({
        container: {
          marginTop: '20%',
          width: '85%',
        },
        layout: {
          borderWidth: 1,
          borderColor: 'black'
        }
    }),
    tableHeader: createStyle({
      container: {
        height: '20%',
        backgroundColor: 'white',
      },
      text: {
        margin: 5,
        color: 'black',
        textAlign: 'center'
      }
    }),
    tableRow: createStyle({
      container: {
        backgroundColor: 'black',
      },
      text: {
        margin: 6,
        textAlign: 'center'
      }
    }),
    title: createStyle({
      text: {
          fontWeight: "bold",
          fontSize: 25,
          marginBottom: 10,
          color: 'white',
          textAlign: 'center'
      }
  }),
};