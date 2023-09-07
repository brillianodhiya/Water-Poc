import { message } from 'antd';
import axios from 'axios';
import api from '../../../config/axiosConfig';

type postErrorTypes = {
  data: {
    message: string;
    responseCode: number;
  };
};

export const ApiSetSchedule = async (values: {
  id: number;
  type: string;
  name?: string;
  scedule_type: string;
  scedule_date: string;
  scadule_time_start: string;
  scadule_time_end: string;
  scedule_day?: any[];
}) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>('/schedule/create', {
      room_id: values.id,
      room_type: values.type,
      room_name: values.name,
      scedule_type: values.scedule_type,
      scedule_date: values.scedule_date,
      scadule_time_start: values.scadule_time_start,
      scadule_time_end: values.scadule_time_end,
      scedule_day: values.scedule_day,
    });

    return {
      ...data,
      status: 'ok',
      error: false,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // return error.message;
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }

      return {
        responseCode: 400,
        message: error.response?.data?.message || error.message,
        error: true,
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occured');
      return {
        responseCode: 400,
        message: 'An unexpected error occured',
        error: true,
      };
    }
  }
};

export const ApiEditSchedule = async (values: {
  id: number;
  type: string;
  name?: string;
  scedule_type: string;
  scedule_date: string;
  scadule_time_start: string;
  scadule_time_end: string;
  scedule_day?: any[];
  id_schedule?: number;
}) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>('/schedule/edit', {
      room_id: values.id,
      room_type: values.type,
      room_name: values.name,
      scedule_type: values.scedule_type,
      scedule_date: values.scedule_date,
      scadule_time_start: values.scadule_time_start,
      scadule_time_end: values.scadule_time_end,
      scedule_day: values.scedule_day,
      id: values.id_schedule,
    });

    return {
      ...data,
      status: 'ok',
      error: false,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // return error.message;
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }

      return {
        responseCode: 400,
        message: error.response?.data?.message || error.message,
        error: true,
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occured');
      return {
        responseCode: 400,
        message: 'An unexpected error occured',
        error: true,
      };
    }
  }
};

export async function apiGetListEvent(values: {
  date: string;
  room_type: any[] | undefined;
  room_id: any[] | undefined;
}) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListEvent>(
      '/schedule/view/monthly/' + values.date,
      {
        room_type: values.room_type,
        room_id: values.room_id,
      },
    );

    return {
      // ...data,
      data: data.payload,
      error: false,
      message: 'Success Get',
      responseCode: data.responseCode,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      message.error(error.message);
      return {
        data: null,
        error: true,
        message: error.response?.data?.message || error.message,
        responseCode: 400,
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occurred');
      return {
        data: null,
        error: true,
        message: 'An unexpected error occurred',
        responseCode: 400,
      };
      // return 'An unexpected error occurred';
    }
  }
}

export async function apiGetListEventDay(values: {
  date: string;
  room_type: any[] | undefined;
  room_id: any[] | undefined;
}) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListEvent>('/schedule/view/' + values.date, {
      room_type: values.room_type,
      room_id: values.room_id,
    });

    return {
      // ...data,
      data: data.payload,
      error: false,
      message: 'Success Get',
      responseCode: data.responseCode,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      message.error(error.message);
      return {
        data: null,
        error: true,
        message: error.response?.data?.message || error.message,
        responseCode: 400,
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occurred');
      return {
        data: null,
        error: true,
        message: 'An unexpected error occurred',
        responseCode: 400,
      };
      // return 'An unexpected error occurred';
    }
  }
}

export const ApiDeleteSchedule = async (values: { id?: number }) => {
  try {
    const { data } = await api.delete<APIBadiklat.PostResponse>('/schedule/' + values.id);

    return {
      ...data,
      status: 'ok',
      error: false,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // return error.message;
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }

      return {
        responseCode: 400,
        message: error.response?.data?.message || error.message,
        error: true,
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occured');
      return {
        responseCode: 400,
        message: 'An unexpected error occured',
        error: true,
      };
    }
  }
};

export async function apiGetListEventNoFilter(values: { date: string }) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListEvent>(
      '/schedule/view/monthly/' + values.date,
    );

    return {
      // ...data,
      data: data.payload,
      error: false,
      message: 'Success Get',
      responseCode: data.responseCode,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      message.error(error.message);
      return {
        data: null,
        error: true,
        message: error.response?.data?.message || error.message,
        responseCode: 400,
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occurred');
      return {
        data: null,
        error: true,
        message: 'An unexpected error occurred',
        responseCode: 400,
      };
      // return 'An unexpected error occurred';
    }
  }
}
