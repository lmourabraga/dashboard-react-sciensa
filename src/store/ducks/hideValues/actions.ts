import { action } from 'typesafe-actions';
import { HideValuesTypes, HideValues } from './types';

export const loadRequest = () => action(HideValuesTypes.LOAD_REQUEST);

export const loadSuccess = (data: HideValues) => action(HideValuesTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(HideValuesTypes.LOAD_FAILURE);
