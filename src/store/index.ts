import { createStore, Store } from 'redux';
import { CardsState } from './ducks/cards/types';
import { HideValuesState } from './ducks/hideValues/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  cards: CardsState;
  hideValues: HideValuesState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
