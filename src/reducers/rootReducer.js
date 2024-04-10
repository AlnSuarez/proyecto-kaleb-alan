import { combineReducers } from 'redux';
import pomodoroConfigReducer from './pomodoroConfigReducer';

const rootReducer = combineReducers({
    pomodoroConfigReducer: pomodoroConfigReducer,
});

export default rootReducer;