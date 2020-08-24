export enum CardsTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

export interface Cards {
  flag: string;
  titulo: string;
  valor: string;
  mes: string;
  ano: string;
  periodoAnterior: string;
}

export interface CardsState {
  readonly data: Cards[];
  readonly loading: boolean;
  readonly error: boolean;
}
