import { StyleSheet } from "react-native";

const createStyle = (obj) => StyleSheet.create(obj);

export default {
    screen: createStyle({
        background: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          width: "100%",
        },
        container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: '25%'
        },
    }),
    title: createStyle({
        text: {
            fontWeight: "bold",
            fontSize: 18,
            margin: '2%',
            color: '#000',
        }
    }),
    button: createStyle({
      container: {
        alignItems: 'center',
        width: '100%',
        marginBottom: '5%',
        backgroundColor: '#fff',
        justifyContent: "center",
      },
    }),
    img: createStyle({
      layout: {
        width: 150,
        height: 150,
      },
      container: {
        backgroundColor: "#fff",
      },
    }),
    table: createStyle({
      container: {
        marginTop: '15%',
        width: '100%'
      }
    })
};