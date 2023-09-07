import { message } from 'antd';
import axios from 'axios';
import api from '../../../config/axiosConfig';

type postErrorTypes = {
  data: {
    message: string;
    responseCode: number;
  };
};

export async function getListTenant(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiListTenant>('/tenant', {
      method: 'GET',

      ...(options || {}),
    });

    return {
      // ...data,
      data: data.data,
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
        message: error.message,
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

export const ApiEditTenant = async (values: {
  image: any;
  area_id: number;
  name: string;
  pic_name: string;
  address: string | null;
  latitude: any;
  longitude: any;
  // customer_id: any;
  type: any;
  area_name: string;
  phone: string;
  email: string;
  id: number;
  username: string;
  password: string;
  nama_unit: string;
  kode_unit: string;
}) => {
  try {
    const { data } = await api.put<APINebula.PostResponse>(
      `/tenant/${values.id}`,
      {
        image: values.image,
        area_id: values.area_id,
        name: values.name,
        pic_name: values.pic_name,
        address: values.address,
        latitude: values.latitude,
        longitude: values.longitude,
        // customer_id: values.customer_id,
        type: values.type,
        area_name: values.area_name,
        phone: values.phone,
        email: values.email,
        username: values.username,
        password: values.password,
        nama_unit: values.nama_unit,
        kode_unit: values.kode_unit,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

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
        message: error.message,
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
export const ApiAddTenant = async (values: {
  image: any;
  area_id: number;
  name: string;
  pic_name: string;
  address: string | null;
  latitude: any;
  longitude: any;
  // customer_id: any;
  type: any;
  area_name: string;
  phone: string;
  email: string;
  nama_unit: string;
  kode_unit: string;
  username: string;
  password: string;
}) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>(
      '/tenant',
      {
        image: values.image,
        area_id: values.area_id,
        name: values.name,
        pic_name: values.pic_name,
        address: values.address,
        latitude: values.latitude,
        longitude: values.longitude,
        // customer_id: values.customer_id,
        type: values.type,
        area_name: values.area_name,
        phone: values.phone,
        email: values.email,
        username: values.username,
        password: values.password,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

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
        message: error.message,
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
export const getDeviceByTenant = async (tenant_id: number) => {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiTenant>(`/tenant/device/${tenant_id}`, {
      method: 'GET',
    });

    return {
      // ...data,
      data: data.data,
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
        message: error.message,
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
};
export const getTenantInfo = async (tenant_id: number) => {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiTenant>(`/tenant/detail/${tenant_id}`, {
      method: 'GET',
    });

    return {
      // ...data,
      data: data.data,
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
        message: error.message,
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
};
