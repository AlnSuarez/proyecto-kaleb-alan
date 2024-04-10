import { 
  SET_MINUTES_FOCUS,
  SET_MINUTES_BREAK,
  SET_MINUTES_BREAK_LARGE,
  SET_LONG_BREAK_INTERVAL 
} from "../actionsTypes/actionTypes";

const initialState = {
    minutesFocus: 25,
    minutesBreak: 5,
    minutesBreakLarge: 15,
    longBreakInterval: 4,
};

const pomodoroConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MINUTES_FOCUS:
      return {
        ...state,
        minutesFocus: action.payload,
      };

    case SET_MINUTES_BREAK:
      return {
        ...state,
        minutesBreak: action.payload,
      };
    
    case SET_MINUTES_BREAK_LARGE:
      return {
          ...state,
          minutesBreakLarge: action.payload,
      };
    case SET_LONG_BREAK_INTERVAL:
      return {
        ...state,
        longBreakInterval: action.payload,
      };
    default:
      return state;
  }
};

export default pomodoroConfigReducer;