export enum HideValuesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

export interface HideValues {
  status: boolean;
}

export interface HideValuesState {
  readonly data: HideValues;
  readonly loading: boolean;
  readonly error: boolean;
}
