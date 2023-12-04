import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { toast } from 'react-toastify';

const {createNotificationBegin, createNotificationErr, createNotificationSuccess, readNotificationBegin, readNotificationSuccess, readNotificationErr, hideNotificationBegin, hideNotificationErr, hideNotificationSuccess } = actions;

const readNotificationList = () => {
  return async (dispatch) => {
    try {
      dispatch(readNotificationBegin());
      const data = await DataService.get('/wp-json/dbevn/v1/alerts/all')
      dispatch(readNotificationSuccess(data.data));
    } catch (err) {
      dispatch(readNotificationErr(err));
    }
  };
};

const readNotificationHide = (id, callback) => {
  return async (dispatch) => {
    try {
      dispatch(hideNotificationBegin());
      const data = await DataService.post(`/wp-json/dbevn/v1/alerts/trash/${id}`)
      dispatch(hideNotificationSuccess());
      callback()
    } catch (err) {
      dispatch(hideNotificationErr(err));
    }
  };
};
const createNotification = (value) => {
  return async (dispatch) => {
    try {
      dispatch(createNotificationBegin());
      const data = await DataService.post(`/wp-json/dbevn/v1/alerts/create`, value)
      dispatch(createNotificationSuccess());
      toast.success('Tạo thông báo thành công')
    } catch (err) {
      dispatch(createNotificationErr(err));
    }
  };
};

export { readNotificationList, readNotificationHide, createNotification };
