import actions from "./actions";

const {DELETE_BEGIN, DELETE_SUCESS,CREATE_BEGIN, CREATE_SUCESS, CREATE_ERR,USERS_GET_BEGIN, USERS_GET_SUCESS, USERS_GET_ERR, USER_GET_BEGIN, USER_GET_ERR, USER_GET_SUCESS, USER_UPDATE_BEGIN, USER_UPDATE_ERR, USER_UPDATE_SUCESS} = actions

const initialState = {
  data: [],
  loading: false,
  err: null,
}

const usersReducer = (state = initialState, action)=>{
  const {type, data, err} = action;
  switch(type){
    case USERS_GET_BEGIN:
      return{
        ...state,
        loading: true,
      }
    case USERS_GET_SUCESS:
    return{
      ...state,
      data,
      loading: false,
    }
    case USERS_GET_ERR:
      return{
        ...state,
        err,
        loading: false,
      }
    default:
      return state;
  }
}


const initialStateSingle = {
  data: [],
  loading: false,
  err: null,
}

const userReducer = (state = initialStateSingle, action)=>{
  const {type, data, err} = action;
  switch(type){
    case USER_GET_BEGIN:
      return{
        ...state,
        loading: true,
      }
    case USER_GET_SUCESS:
    return{
      ...state,
      data,
      loading: false,
    }
    case USER_GET_ERR:
      return{
        ...state,
        err,
        loading: fale,
      }
      case USER_UPDATE_BEGIN:
      return{
        ...state,
        loading: true,
      }
    case USER_UPDATE_SUCESS:
    return{
      ...state,
      data,
      loading: false,
    }
    case USER_UPDATE_ERR:
      return{
        ...state,
        err,
        loading: fale,
      }
      case CREATE_BEGIN:
        return{
          ...state,
          loading: true,
        }
      case CREATE_SUCESS:
      return{
        ...state,
        loading: false,
      }
      case CREATE_ERR:
        return{
          ...state,
          err,
          loading: fale,
        }

        case DELETE_BEGIN:
          return{
            ...state,
            loading: true,
          }
        case DELETE_SUCESS:
        return{
          ...state,
          loading: false,
        }
       
    default:
      return state;
  }
}
export { usersReducer, userReducer };
