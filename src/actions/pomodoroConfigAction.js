import { 
    SET_MINUTES_FOCUS,
    SET_MINUTES_BREAK,
    SET_MINUTES_BREAK_LARGE,
    SET_LONG_BREAK_INTERVAL 
} from "../actionsTypes/actionTypes";

const setMinutesFocus = (payload) => {
  return {
    type: SET_MINUTES_FOCUS,
    payload,
  };
};

const setMinutesBreak = (payload) => {
  return {
    type: SET_MINUTES_BREAK,
    payload,
  };
};

const setMinutesBreakLarge = (payload) => {
  return {
    type: SET_MINUTES_BREAK_LARGE,
    payload,
  };
};

const setLongBreakInterval = (payload) => {
  return {
    type: SET_LONG_BREAK_INTERVAL,
    payload,
  };
};

export { setMinutesFocus, setMinutesBreak, setMinutesBreakLarge, setLongBreakInterval };