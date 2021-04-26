import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";

import Style from "./style"

import ApiService from "../../services/external-api-service";
const apiService = new ApiService();

import PhasesUtils from "../../utils/phases-utils";

const getChampionshipKeys = (idChampionship) => 
  apiService.getChampionshipKeys(idChampionship)
    .then(res => PhasesUtils.filterPhases(res))
    .catch(() => {});

export default Phases = ({ route: { params: { idChampionship, logoChampionship } }, navigation}) => {
  const { screen, title, button, img, table } = Style 
  const [phases, setPhases] = useState([]);

  useEffect(
    () => {
      getChampionshipKeys(idChampionship).then(res => setPhases(res))
    }, []
  )

  const changePage = (namePage, { idChampionship, idPhase }) => {
    navigation.navigate(namePage, {
      idChampionship,
      idPhase
    });
  };

    return (
      <SafeAreaView style={screen.background}>
        <View style={screen.container}>
          <View style={img.container}>
            <Image style={img.layout} source={{uri: logoChampionship}}/>
          </View>
          <View style={table.container}>
            <FlatList
              style={{ width: "100%" }}
              data={phases}
              keyExtractor={(id, index) => index.toString()}
              renderItem={({ item }) => (
                  <TouchableOpacity style={button.container} onPress={() => changePage('Keys', { idChampionship, idPhase: item.idPhase})}>
                      <Text style={title.text}>{item.namePhase}</Text>
                  </TouchableOpacity>
              )}/>
          </View>
        </View>
      </SafeAreaView>
    );
  };