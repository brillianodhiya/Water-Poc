import { message } from 'antd';
import axios from 'axios';
import api from '../../../config/axiosConfig';

type LoginError = {
  data: {
    message: string;
    responseCode: number;
  };
};

export const loginUser = async (values: {
  username: string;
  password: string;
  autoLogin: boolean;
}) => {
  try {
    const { data } = await api.post<APIBadiklat.LoginResponse>('/login', {
      username: values.username,
      password: values.password,
    });

    console.log(data, 'DATA');
    window.localStorage.setItem('token', data.token);

    return {
      ...data,
      status: 'ok',
      type: 'account',
      currentAuthority: 'admin',
      token: data.token,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // return error.message;
      const d = error.response as LoginError;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }

      return {
        responseCode: 400,
        message: error.response?.data?.message || error.message,
        status: 'failed',
        type: 'account',
        currentAuthority: 'admin',
        token: '',
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occured');
      return {
        responseCode: 400,
        message: 'An unexpected error occured',
        status: 'failed',
        type: 'account',
        currentAuthority: 'admin',
        token: '',
      };
    }
  }
};

export async function currentUser(options: object | undefined, token: string) {
  // console.log(token, 'TOKEN');
  const { data } = await api.get<APIBadiklat.CurrentUser>('/profile/area', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
    ...(options || {}),
  });

  return {
    ...data.message,
    name: data.message.username,
    access: 'admin',
    type: 'area',
  };
}

export async function currentUser2(options: object | undefined, token: string) {
  // console.log(token, 'TOKEN');
  const { data } = await api.get<APIBadiklat.CurrentUser>('/web/user/profile', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
    ...(options || {}),
  });

  return {
    ...data.data,
    name: data.data?.fullname,
    access: 'admin',
    type: 'area',
  };
}
