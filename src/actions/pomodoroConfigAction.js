import { 
    SET_MINUTES_FOCUS,
    SET_MINUTES_BREAK,
    SET_MINUTES_BREAK_LARGE,
    SET_LONG_BREAK_INTERVAL 
} from "../actionsTypes/actionTypes";

const setMinutesFocusAction = (payload) => {
  return {
    type: SET_MINUTES_FOCUS,
    payload,
  };
};

const setMinutesBreakAction = (payload) => {
  return {
    type: SET_MINUTES_BREAK,
    payload,
  };
};

const setMinutesBreakLargeAction = (payload) => {
  return {
    type: SET_MINUTES_BREAK_LARGE,
    payload,
  };
};

const setLongBreakIntervalAction = (payload) => {
  return {
    type: SET_LONG_BREAK_INTERVAL,
    payload,
  };
};

export { setMinutesFocusAction, setMinutesBreakAction, setMinutesBreakLargeAction, setLongBreakIntervalAction };