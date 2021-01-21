import { createStore } from 'redux';
import rootReducer from './index';

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
