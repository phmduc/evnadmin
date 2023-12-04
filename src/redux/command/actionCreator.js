import axios from 'axios';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { toast } from 'react-toastify';


const { approveDepBegin, approveDepErr, approveDepSuccess, depositCommandReadBegin, depositCommandReadSuccess, depositsReadErr, depositsReadBegin, depositsReadSuccess,projectsReadBegin, projectsReadErr, projectsReadSuccess,commandsReadBegin, commandsReadErr, commandsReadSuccess,  withdrawsReadBegin, withdrawsReadErr, withdrawsReadSuccess, approveBegin, approveErr, approveSuccess, withdrawCommandReadBegin, withdrawCommandReadErr, withdrawCommandReadSuccess } = actions;

const commandGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(commandsReadBegin());
      const initialState = await DataService.get('/wp-json/dbevn/v1/orders/all');
      dispatch(commandsReadSuccess(initialState.data));
    } catch (err) {
      dispatch(commandsReadErr(err));
    }
  };
};

const projectGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(projectsReadBegin());
      const initialState = await DataService.get('/wp-json/dbevn/v1/products');
      dispatch(projectsReadSuccess(initialState.data));
    } catch (err) {
      dispatch(projectsReadErr(err));
    }
  };
};
const withdrawGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(withdrawsReadBegin());
      const initialState = await DataService.get('/wp-json/dbevn/v1/cash-requests/all');
      dispatch(withdrawsReadSuccess(initialState.data));
    } catch (err) {
      dispatch(withdrawsReadErr(err));
    }
  };
};

const withdrawCommand = (data) => {
  return async (dispatch) => {
    try {
      dispatch(withdrawCommandReadBegin());
      const initialState = await DataService.post('/wp-json/dbevn/v1/cash-requests/create', data);
      dispatch(withdrawCommandReadSuccess(initialState.data));
      toast.success('Tạo lệnh rút thành công')
    } catch (err) {
      dispatch(approveErr(err.response.data.message));
      toast.error(err.response.data.message)
    }
  };
};

const approveGetData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(approveBegin());
      const initialState = await DataService.post('/wp-json/dbevn/v1/cash-requests/accept', data);
      dispatch(approveSuccess(initialState.data));
      toast.success(initialState.data)
    } catch (err) {
      dispatch(approveErr(err.response.data.message));
      toast.error(err.response.data.message)

    }
  };
};

const depositGetData = () => {
  return async (dispatch) => {
    try {
      dispatch(depositsReadBegin());
      const initialState = await DataService.get('/wp-json/dbevn/v1/deposit-requests/all');
      dispatch(depositsReadSuccess(initialState.data));
    } catch (err) {
      dispatch(depositsReadErr(err));
    }
  };
};

const depositCommand = (data) => {
  return async (dispatch) => {
    try {
      dispatch(depositCommandReadBegin());
      const initialState = await DataService.post('/wp-json/dbevn/v1/deposit-requests/create', data);
      dispatch(depositCommandReadSuccess(initialState.data));
      toast.success('Tạo lệnh nạp thành công')
    } catch (err) {
      dispatch(approveErr(err.response.data.message));
      toast.error(err.response.data.message)
    }
  };
};

const approveDepGetData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(approveDepBegin());
      const initialState = await DataService.post('/wp-json/dbevn/v1/deposit-requests/accept', data);
      dispatch(approveDepSuccess(initialState.data));
      toast.success(initialState.data)
    } catch (err) {
      dispatch(approveDepErr(err.response.data.message));
      toast.error(err.response.data.message)

    }
  };
};



export { commandGetData, withdrawGetData, approveGetData, withdrawCommand, projectGetData, depositCommand, depositGetData, approveDepGetData };
