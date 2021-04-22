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
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        },
    }),
    title: createStyle({
        text: {
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 10,
            color: '#000',
        }
    }),
    row: createStyle({
      container: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: '5%' 
      },
    })
};