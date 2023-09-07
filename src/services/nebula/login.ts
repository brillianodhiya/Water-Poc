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
  email: string;
  password: string;
  autoLogin: boolean;
}) => {
  try {
    const { data } = await api.post<APINebula.LoginResponse>('/auth/login', {
      email: values.email,
      password: values.password,
    });

    data.data.token = 'Bearer ' + data.data.token;
    // console.log(data, 'DATA');
    window.localStorage.setItem('token', data.data.token);

    return {
      ...data.data,
      ...data,
      status: 'ok',
      type: 'account',
      currentAuthority: 'admin',
      token: data.data.token,
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
        message: error.message,
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
  const { data } = await api.get<APINebula.CurrentUser>('/profile/area', {
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
  const { data } = await api.get<APINebula.CurrentUser>('/user/profile', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
    ...(options || {}),
  });

  console.log(data, 'DATA');

  return {
    ...data.data,
    access: 'admin',
    type: 'area',
  };
}

// export async function currentUser2(options: object, token: string) {
//   // console.log(token, 'TOKEN');
//   return new Promise((resolve) => {
//     resolve({
//       ...options,
//       token,
//     });
//   });
// const { data } = await api.get<APINebula.CurrentUser>('/web/user/profile', {
//   method: 'GET',
//   headers: {
//     Authorization: token,
//   },
//   ...(options || {}),
// });

// return {
//   ...data.data,
//   name: data.data?.fullname,
//   access: 'admin',
//   type: 'area',
// };
// }
