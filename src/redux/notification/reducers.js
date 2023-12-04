import actions from './actions';

const {
  HIDE_NOTIFICATION_BEGIN,
  HIDE_NOTIFICATION_ERR,
  HIDE_NOTIFICATION_SUCCESS,
  READ_NOTIFICATION_BEGIN,
  READ_NOTIFICATION_SUCCESS,
  READ_NOTIFICATION_ERR,
  CREATE_NOTIFICATION_BEGIN, 
  CREATE_NOTIFICATION_ERR,
  CREATE_NOTIFICATION_SUCCESS
} = actions;

const initialStateFilter = {
  data: [],
  loading: false,
  error: null,
};

const readNotificationReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case READ_NOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case READ_NOTIFICATION_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case READ_NOTIFICATION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case HIDE_NOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case HIDE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case HIDE_NOTIFICATION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case CREATE_NOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CREATE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_NOTIFICATION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { readNotificationReducer };
