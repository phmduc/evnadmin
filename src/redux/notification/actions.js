const actions = {
  READ_NOTIFICATION_BEGIN: 'READ_NOTIFICATION_BEGIN',
  READ_NOTIFICATION_SUCCESS: 'READ_NOTIFICATION_SUCCESS',
  READ_NOTIFICATION_ERR: 'READ_NOTIFICATION_ERR',

  HIDE_NOTIFICATION_BEGIN: 'HIDE_NOTIFICATION_BEGIN',
  HIDE_NOTIFICATION_SUCCESS: 'HIDE_NOTIFICATION_SUCCESS',
  HIDE_NOTIFICATION_ERR: 'HIDE_NOTIFICATION_ERR',

  CREATE_NOTIFICATION_BEGIN: 'CREATE_NOTIFICATION_BEGIN',
  CREATE_NOTIFICATION_SUCCESS: 'CREATE_NOTIFICATION_SUCCESS',
  CREATE_NOTIFICATION_ERR: 'CREATE_NOTIFICATION_ERR',
  readNotificationBegin: () => {
    return {
      type: actions.READ_NOTIFICATION_BEGIN,
    };
  },

  readNotificationSuccess: (data) => {
    return {
      type: actions.READ_NOTIFICATION_SUCCESS,
      data,
    };
  },

  readNotificationErr: (err) => {
    return {
      type: actions.READ_NOTIFICATION_ERR,
      err,
    };
  },

  
  hideNotificationBegin: () => {
    return {
      type: actions.HIDE_NOTIFICATION_BEGIN,
    };
  },

  hideNotificationSuccess: (data) => {
    return {
      type: actions.HIDE_NOTIFICATION_SUCCESS,
    };
  },

  hideNotificationErr: (err) => {
    return {
      type: actions.HIDE_NOTIFICATION_ERR,
      err,
    };
  },
  createNotificationBegin: () => {
    return {
      type: actions.CREATE_NOTIFICATION_BEGIN,
    };
  },

  createNotificationSuccess: (data) => {
    return {
      type: actions.CREATE_NOTIFICATION_SUCCESS,
    };
  },

  createNotificationErr: (err) => {
    return {
      type: actions.CREATE_NOTIFICATION_ERR,
      err,
    };
  },
};

export default actions;
