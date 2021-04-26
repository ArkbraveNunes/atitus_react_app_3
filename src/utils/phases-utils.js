import PhasesEnum from "../enums/phases-enum";

export default class PhasesUtils {  
    static filterPhases(data) {
      return data.map(item => {
        const { 
          nome: namePhase,
          fase_id: idPhase
        } = item;
        return Object.values(PhasesEnum).includes(namePhase) ? { namePhase, idPhase } : null
      }).filter(item => item)
    }
  };