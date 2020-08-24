import { action } from 'typesafe-actions';
import { CardsTypes, Cards } from './types';

export const loadRequest = () => action(CardsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Cards[]) =>
  action(CardsTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(CardsTypes.LOAD_FAILURE);
