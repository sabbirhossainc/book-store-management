import { combineReducers } from "redux";
import bookReducer from './books/reducer'
import filterReducer from './filters/reducer'
import {modeReducer} from './mode/reducer'

const rootReducer = combineReducers({
    books:bookReducer,
    filters:filterReducer,
    modes:modeReducer,
});

export default rootReducer;
