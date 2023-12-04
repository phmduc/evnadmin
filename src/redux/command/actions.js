const actions = {
  COMMANDS_READ_BEGIN: 'COMMANDS_READ_BEGIN',
  COMMANDS_READ_SUCCESS: 'COMMANDS_READ_SUCCESS',
  COMMANDS_READ_ERR: 'COMMANDS_READ_ERR',

  WITHDRAW_READ_BEGIN: 'WITHDRAW_READ_BEGIN',
  WITHDRAW_READ_SUCCESS: 'WITHDRAW_READ_SUCCESS',
  WITHDRAW_READ_ERR: 'WITHDRAW_READ_ERR',

  
  WITHDRAWCOMMAND_READ_BEGIN: 'WITHDRAWCOMMAND_READ_BEGIN',
  WITHDRAWCOMMAND_READ_SUCCESS: 'WITHDRAWCOMMAND_READ_SUCCESS',
  WITHDRAWCOMMAND_READ_ERR: 'WITHDRAWCOMMAND_READ_ERR',

    
  PROJECT_READ_BEGIN: 'PROJECT_READ_BEGIN',
  PROJECT_READ_SUCCESS: 'PROJECT_READ_SUCCESS',
  PROJECT_READ_ERR: 'PROJECT_READ_ERR',


  APPROVE_BEGIN: 'APPROVE_BEGIN',
  APPROVE_SUCCESS: 'APPROVE_SUCCESS',
  APPROVE_ERR: 'APPROVE_ERR',

  DEPOSIT_READ_BEGIN: 'DEPOSIT_READ_BEGIN',
  DEPOSIT_READ_SUCCESS: 'DEPOSIT_READ_SUCCESS',
  DEPOSIT_READ_ERR: 'DEPOSIT_READ_ERR',

  
  DEPOSITCOMMAND_READ_BEGIN: 'DEPOSITCOMMAND_READ_BEGIN',
  DEPOSITCOMMAND_READ_SUCCESS: 'DEPOSITCOMMAND_READ_SUCCESS',
  DEPOSITCOMMAND_READ_ERR: 'DEPOSITCOMMAND_READ_ERR',

  APPROVEDEP_BEGIN: 'APPROVEDEP_BEGIN',
  APPROVEDEP_SUCCESS: 'APPROVEDEP_SUCCESS',
  APPROVEDEP_ERR: 'APPROVEDEP_ERR',

  commandsReadBegin: () => {
    return {
      type: actions.COMMANDS_READ_BEGIN,
    };
  },

  commandsReadSuccess: (data) => {
    return {
      type: actions.COMMANDS_READ_SUCCESS,
      data,
    };
  },

  commandsReadErr: (err) => {
    return {
      type: actions.COMMANDS_READ_ERR,
      err,
    };
  },


  withdrawsReadBegin: () => {
    return {
      type: actions.WITHDRAW_READ_BEGIN,
    };
  },

  withdrawsReadSuccess: (data) => {
    return {
      type: actions.WITHDRAW_READ_SUCCESS,
      data,
    };
  },

  withdrawsReadErr: (err) => {
    return {
      type: actions.WITHDRAW_READ_ERR,
      err,
    };
  },

  withdrawCommandReadBegin: () => {
    return {
      type: actions.WITHDRAWCOMMAND_READ_BEGIN,
    };
  },

  withdrawCommandReadSuccess: (data) => {
    return {
      type: actions.WITHDRAWCOMMAND_READ_SUCCESS,
      data,
    };
  },

  withdrawCommandReadErr: (err) => {
    return {
      type: actions.WITHDRAWCOMMAND_READ_ERR,
      err,
    };
  },

  projectsReadBegin: () => {
    return {
      type: actions.PROJECT_READ_BEGIN,
    };
  },
  depositsReadBegin: () => {
    return {
      type: actions.DEPOSIT_READ_BEGIN,
    };
  },

  depositsReadSuccess: (data) => {
    return {
      type: actions.DEPOSIT_READ_SUCCESS,
      data,
    };
  },

  depositsReadErr: (err) => {
    return {
      type: actions.DEPOSIT_READ_ERR,
      err,
    };
  },

  depositCommandReadBegin: () => {
    return {
      type: actions.DEPOSITCOMMAND_READ_BEGIN,
    };
  },

  depositCommandReadSuccess: (data) => {
    return {
      type: actions.DEPOSITCOMMAND_READ_SUCCESS,
      data,
    };
  },

  depositCommandReadErr: (err) => {
    return {
      type: actions.DEPOSITCOMMAND_READ_ERR,
      err,
    };
  },

  projectsReadBegin: () => {
    return {
      type: actions.PROJECT_READ_BEGIN,
    };
  },

  projectsReadSuccess: (data) => {
    return {
      type: actions.PROJECT_READ_SUCCESS,
      data,
    };
  },

  projectsReadErr: (err) => {
    return {
      type: actions.PROJECT_READ_ERR,
      err,
    };
  },


  approveBegin: () => {
    return {
      type: actions.APPROVE_BEGIN,
    };
  },

  approveSuccess: (data) => {
    return {
      type: actions.APPROVE_SUCCESS,
      data,
    };
  },

  approveErr: (err) => {
    return {
      type: actions.APPROVE_ERR,
      err,
    };
  },

  
  approveDepBegin: () => {
    return {
      type: actions.APPROVEDEP_BEGIN,
    };
  },

  approveDepSuccess: (data) => {
    return {
      type: actions.APPROVEDEP_SUCCESS,
      data,
    };
  },

  approveDepErr: (err) => {
    return {
      type: actions.APPROVEDEP_ERR,
      err,
    };
  },


};

export default actions;
