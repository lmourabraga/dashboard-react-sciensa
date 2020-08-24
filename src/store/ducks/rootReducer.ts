import { combineReducers } from 'redux';

import cards from './cards';
import hideValues from './hideValues';

export default combineReducers({
  cards,
  hideValues,
});
