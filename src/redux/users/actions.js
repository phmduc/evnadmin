const actions = {
    USERS_GET_BEGIN: "USERS_GET_BEGIN",
    USERS_GET_SUCESS: "USERS_GET_SUCESS",
    USERS_GET_ERR: "USERS_GET_ERR",

    USER_GET_BEGIN: "USER_GET_BEGIN",
    USER_GET_SUCESS: "USER_GET_SUCESS",
    USER_GET_ERR: "USER_GET_ERR",

    USER_UPDATE_BEGIN: "USER_UPDATE_BEGIN",
    USER_UPDATE_SUCESS: "USER_UPDATE_SUCESS",
    USER_UPDATE_ERR: "USER_UPDATE_ERR",

    CREATE_BEGIN: "CREATE_BEGIN",
    CREATE_SUCESS: "CREATE_SUCESS",
    CREATE_ERR: "CREATE_ERR",

    DELETE_BEGIN: "DELETE_BEGIN",
    DELETE_SUCESS: "DELETE_SUCESS",

    usersGetBegin: () =>{
        return {
            type: actions.USERS_GET_BEGIN,
        }
    },

    usersGetSucess: (data) =>{
        return {
            type: actions.USERS_GET_SUCESS,
            data
        }
    },
    usersGetErr: (err) =>{
        return {
            type: actions.USERS_GET_ERR,
            err
        }
    },



    userGetBegin: () =>{
        return {
            type: actions.USER_GET_BEGIN,
        }
    },

    userGetSucess: (data) =>{
        return {
            type: actions.USER_GET_SUCESS,
            data
        }
    },
    userGetErr: (err) =>{
        return {
            type: actions.USER_GET_ERR,
            err
        }
    },


    userUpdateBegin: () =>{
        return {
            type: actions.USER_UPDATE_BEGIN,
        }
    },

    userUpdateSucess: (data) =>{
        return {
            type: actions.USER_UPDATE_SUCESS,
            data
        }
    },
    userUpdateErr: (err) =>{
        return {
            type: actions.USER_UPDATE_ERR,
            err
        }
    },

    createBegin: () =>{
        return {
            type: actions.CREATE_BEGIN,
        }
    },

    createSucess: (data) =>{
        return {
            type: actions.CREATE_SUCESS,
            data
        }
    },
    createErr: (err) =>{
        return {
            type: actions.CREATE_ERR,
            err
        }
    },
    deleteBegin: () =>{
        return {
            type: actions.DELETE_BEGIN,
        }
    },

    deleteSucess: (data) =>{
        return {
            type: actions.DELETE_SUCESS,
            data
        }
    },
  
}

export default actions