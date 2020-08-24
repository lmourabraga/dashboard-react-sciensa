import { Reducer } from 'redux';
import { CardsState, CardsTypes } from './types';

const INITIAL_STATE: CardsState = {
  data: [
    {
      flag: 'one',
      titulo: 'Fundos',
      valor: '5.000.000,00',
      mes: '+5%',
      ano: '+5%',
      periodoAnterior: '+5%',
    },
    {
      flag: 'two',
      titulo: 'Renda Fixa',
      valor: '5.000.000,00',
      mes: '+5%',
      ano: '+5%',
      periodoAnterior: '+5%',
    },
    {
      flag: 'three',
      titulo: 'Ações/Futuros',
      valor: '5.000.000,00',
      mes: '+5%',
      ano: '+5%',
      periodoAnterior: '+5%',
    },
    {
      flag: 'four',
      titulo: 'Tesouro',
      valor: '5.000.000,00',
      mes: '+5%',
      ano: '+5%',
      periodoAnterior: '+5%',
    },
    {
      flag: 'five',
      titulo: 'Previdência',
      valor: '5.000.000,00',
      mes: '+5%',
      ano: '+5%',
      periodoAnterior: '+5%',
    },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<CardsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CardsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case CardsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
