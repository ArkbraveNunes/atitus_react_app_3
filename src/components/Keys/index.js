import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";

import Style from "./style"

import ApiService from "../../services/external-api-service";
const apiService = new ApiService();

import KeysUtils from "../../utils/championship-utils";


const getChampionshipKeys = (idChampionship, keyChampionship) => 
  apiService.getChampionshipKeys(idChampionship, keyChampionship)
    .then(res => KeysUtils.formatKeys(res.chaves))
    .catch(() => {});

export default Keys = ({ route: { params: { idChampionship, idPhase } }}) => {
  const { screen, title, row} = Style
  const [keys, setKeys] = useState([]);

  useEffect(
    () => {
      getChampionshipKeys(idChampionship, idPhase).then(res => setKeys(res))
    }, []
  )

    return (
      <SafeAreaView style={screen.background}>
        <View style={screen.container}>
            <FlatList
              style={{ width: "100%" }}
              data={keys}
              keyExtractor={(id, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={row.container}>
                    <Text style={title.text}>{item.keyName}</Text>
                    <Text style={title.text}>{item.scoreboard}</Text>
                    <Text style={title.text}>Data: {item.date}</Text>
                </View>
                )}/>
        </View>
      </SafeAreaView>
    );
  };