export default class KeysUtils {  
    static extractKeys(data) {
      const { chaves: keys} = data;
      return keys;
    }

    static formatKeys(data) {
      return data.map(item => {
        const { 
          nome: keyName, 
          partida_ida: {
            partida_id: id,
            time_mandante: { nome_popular:nameM, sigla:initialsM, escudo:insigniaM },
            time_visitante: { nome_popular:nameV, sigla:initialsV, escudo:insigniaV },
            placar_mandante: goalsM,
            placar_visitante: goalsV,
            data_realizacao: date,
          },
        } = item;
        const scoreboard = `${nameM} ${goalsM}x${goalsV} ${nameV}`
        return { id, keyName, date, scoreboard, initialsM, initialsV  }
      }).sort((x, y) => x.id - y.id)
    }
  };