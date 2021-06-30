import {combineReducers} from 'redux';
import FoodReducer from "./FoodReducer";
import LoadingReducer from './LoadingReducer'

const rootReducer = combineReducers({
  foodsList: FoodReducer,
  loadingReducer:LoadingReducer
});

export default rootReducer;