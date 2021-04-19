import React from "react";
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';

import Style from "./style"
const { screen, title, table, tableHeader, tableRow } = Style

export default Average = ({ route: { params: { amountConsumed, mileageTraveled } }}) => {
    const tableHead = ['Escala', 'Quantidade']
    const tableData = [
      {scale: 'A', text: 'Mais de 12 Km/L', color: '#2E8B57'},
      {scale: 'B', text: 'Até 12 Km/L', color: '#90EE90'},
      {scale: 'C', text: 'Até 10 Km/L', color: '#FFD700'},
      {scale: 'D', text: 'Até 8 Km/L', color: '#FFA500'},
      {scale: 'E', text: 'Até 4 Km/L', color: '#FF0000'},
    ];
    const average = (mileageTraveled/amountConsumed).toFixed(2);
    const rank = (value) => {
      let result = '';
      switch (true) {
        case value > 12:
          result = 'A'
          break;
        case value > 10:
          result = 'B'
          break;
        case value > 8:
          result = 'C'
          break;
        case value > 4:
          result = 'D'
          break;
        default:
          result = 'E'
          break;
      }
      return result
    };
    return (
      <SafeAreaView style={screen.background}>
      <View style={screen.container}>
        <Text style={title.text}>Quilometragem: {mileageTraveled}</Text>
        <Text style={title.text}>Litros: {amountConsumed}</Text>
        <Text style={title.text}>Média: {average} Km/L</Text>
        <View style={table.container}>
          <Text style={title.text}>Tabela de Consumo</Text>
          <Table borderStyle={table.layout}>
            <Row data={tableHead} style={tableHeader.container} textStyle={tableHeader.text}/>
            {
              tableData.map(({ scale, text, color }, index) => (
                <Row
                  key={index}
                  data={[scale, text]}
                  style={[tableRow.container && {backgroundColor: color}]}
                  textStyle={tableRow.text}
                />
              ))
            }
          </Table>
        </View>
        <Text style={title.text}>Sua Classificação é {rank(average)}</Text>
      </View>
    </SafeAreaView>
    );
  };