import actions from './actions';

const {PROJECT_READ_BEGIN, PROJECT_READ_ERR,PROJECT_READ_SUCCESS, COMMANDS_READ_BEGIN, COMMANDS_READ_SUCCESS, COMMANDS_READ_ERR, WITHDRAWCOMMAND_READ_BEGIN, WITHDRAWCOMMAND_READ_ERR, WITHDRAWCOMMAND_READ_SUCCESS, WITHDRAW_READ_BEGIN, WITHDRAW_READ_ERR, WITHDRAW_READ_SUCCESS, APPROVE_BEGIN, APPROVE_ERR, APPROVE_SUCCESS, DEPOSITCOMMAND_READ_BEGIN, DEPOSITCOMMAND_READ_ERR, DEPOSITCOMMAND_READ_SUCCESS, DEPOSIT_READ_BEGIN, DEPOSIT_READ_ERR,DEPOSIT_READ_SUCCESS, APPROVEDEP_BEGIN, APPROVEDEP_ERR,APPROVEDEP_SUCCESS } = actions;

const initialState = {
  commands: [], // Thay `events` bằng key tương ứng với trạng thái bạn muốn lưu trữ dữ liệu
  loading: false,
  error: null,
};

const commandsReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case COMMANDS_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case COMMANDS_READ_SUCCESS:
      return {
        ...state,
        commands: data,
        loading: false,
      };
    case COMMANDS_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

const initialStateWith = {
  withs: [], // Thay `events` bằng key tương ứng với trạng thái bạn muốn lưu trữ dữ liệu
  loading: false,
  error: null,
};

const withReducer = (state = initialStateWith, action) => {
  const { type, data, err } = action;
  switch (type) {
    case WITHDRAW_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case WITHDRAW_READ_SUCCESS:
      return {
        ...state,
        withs: data,
        loading: false,
      };
    case WITHDRAW_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

      case WITHDRAWCOMMAND_READ_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case WITHDRAWCOMMAND_READ_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case WITHDRAWCOMMAND_READ_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };

      case APPROVE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case APPROVE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case APPROVE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

const initialStateDep = {
  deps: [], // Thay `events` bằng key tương ứng với trạng thái bạn muốn lưu trữ dữ liệu
  loading: false,
  error: null,
};

const depReducer = (state = initialStateDep, action) => {
  const { type, data, err } = action;
  switch (type) {
    case DEPOSIT_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case DEPOSIT_READ_SUCCESS:
      return {
        ...state,
        deps: data,
        loading: false,
      };
    case DEPOSIT_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

      case DEPOSITCOMMAND_READ_BEGIN:
        return {
          ...state,
          loading: true,
        };
      case DEPOSITCOMMAND_READ_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case DEPOSITCOMMAND_READ_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };

      case APPROVEDEP_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case APPROVEDEP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case APPROVEDEP_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};


const initialStatepj = {
  pjs: [], // Thay `events` bằng key tương ứng với trạng thái bạn muốn lưu trữ dữ liệu
  loading: false,
  error: null,
};

const pjReducer = (state = initialStatepj, action) => {
  const { type, data, err } = action;
  switch (type) {
    case PROJECT_READ_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case PROJECT_READ_SUCCESS:
      return {
        ...state,
        pjs: data,
        loading: false,
      };
    case PROJECT_READ_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    

    default:
      return state;
  }
};
export {  commandsReducer, withReducer, pjReducer ,depReducer };
