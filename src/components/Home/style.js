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
          width: "70%",
        },
    }),
    title: createStyle({
        text: {
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 10,
            color: 'white',
        }
    }),
     input: createStyle({
        container: {
          marginTop: 5,
          marginBottom: 10,
          width: "100%",
          height: 40,
          borderRadius: 3,
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        },
        text: {
          padding: 10,
          flex: 1,
          fontSize: 16,
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        },
    }),
    button: createStyle({
        container: {
            marginTop: 10,
            width: "50%",
            height: 40,
            backgroundColor: "white",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
        },
        text: {
            fontSize: 15,
            fontWeight: "bold",
            color: "black",
        },
    }),
    error: createStyle({
      text:{
        color: "red",
        marginTop: -5,
        marginBottom: 5,
      }
    }),
    img: createStyle({
      container: {
        paddingBottom: 50,
        alignItems: 'center'
      },
      layout: {
        width: 150,
        height: 150,
      }
    })
};
