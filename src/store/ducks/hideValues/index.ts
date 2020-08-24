import { Reducer } from 'redux';
import { HideValuesState, HideValuesTypes } from './types';

const INITIAL_STATE: HideValuesState = {
  data: {
    status: true,
  },
  error: false,
  loading: false,
};

const reducer: Reducer<HideValuesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HideValuesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case HideValuesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case HideValuesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          status: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
