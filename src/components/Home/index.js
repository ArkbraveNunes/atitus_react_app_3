import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";

import Style from "./style"
const { screen, title, input, button, img } = Style

export default Home = ({ navigation }) => {
  const [mileageTraveled, setMileageTraveled] = useState(null);
  const [amountConsumed, setAmountConsumed] = useState(null);
  const [errorMileage, setErrorMileage] = useState(null);
  const [errorAmount, setErrorAmount] = useState(null);
  const regex = /[0-9]+(\.[0-9][0-9]?)?/;

    const validationValues = (mileage, amount) => {
      const errorStr = "Valor inválido"
      setErrorMileage(!mileage || !mileage.match(regex) ? errorStr : null);
      setErrorAmount(!amount || !amount.match(regex)? errorStr : null);

      navigatePage()
    };

    const navigatePage = () => {
      if ((mileageTraveled && mileageTraveled.match(regex)) && (amountConsumed && amountConsumed.match(regex))) {
        navigation.navigate("Average", {
          mileageTraveled,
          amountConsumed
        });
      }
    };

    return (
      <SafeAreaView style={screen.background}>
        <View style={screen.container}>
          <View style={img.container}>
            <Image style={img.layout} source={require('../../../assets/fuel-pump-icon.png')}/>
          </View>
          <Text style={title.text}>Média de Consumo Gasolina</Text>
          <View style={input.container}>
            <TextInput 
              placeholder={"Quilometragem percorrida"}
              style={input.text}
              value={mileageTraveled}
              onChangeText={setMileageTraveled}
              keyboardType="numeric"/>
          </View>
          {errorMileage ? <Text style={Style.error.text}>{errorMileage}</Text> : null}
          <View style={input.container}>
            <TextInput 
               placeholder={"Litros consumidos"}
               style={input.text}
               value={amountConsumed}
               onChangeText={setAmountConsumed}
               keyboardType="numeric"/>
          </View>
          {errorAmount ? <Text style={Style.error.text}>{errorAmount}</Text> : null}
          <TouchableOpacity style={button.container}>
            <Text style={button.text} onPress={() => validationValues(mileageTraveled, amountConsumed)}>Simular média</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };