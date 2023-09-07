import { message } from 'antd';
import axios from 'axios';
import api from '../../../config/axiosConfig';

export async function getListTenant(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListTenant>('/list/tenant', {
      method: 'GET',

      ...(options || {}),
    });

    return {
      // ...data,
      data: data.list_tenant,
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
