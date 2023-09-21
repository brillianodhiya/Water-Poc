import { message } from 'antd';
import axios from 'axios';
import api from '../../../config/axiosConfig';

type postErrorTypes = {
  data: {
    message: string;
    responseCode: number;
  };
};

export async function getArea(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiArea>('/area', {
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

export const getAreaInfo = async (area_id: number) => {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiArea>(`/area/detail/${area_id}`, {
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

export const ApiAddArea = async (values: {
  company_name: string;
  area_name: string;
  pic_name: string;
  billing_address: string | null;
  image: any;
  phone: string;
  email_pic: string;
  email_pic_admin: string;
  address: string | null;
  latitude: any;
  longitude: any;
}) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>(
      '/area',
      {
        company_name: values.company_name,
        area_name: values.area_name,
        pic_name: values.pic_name,
        billing_address: values.billing_address,
        image: values.image,
        phone: values.phone,
        email_pic: values.email_pic,
        email_pic_admin: values.email_pic_admin,
        address: values.address,
        latitude: values.latitude,
        longitude: values.longitude,
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

export const ApiEditAreaSettings = async (values: any, area_id: number) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/area/setting/' + area_id, {
      ...values,
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

export const ApiEditAreaPricing = async (values: any) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/area/pricing', values);

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

export const ApiEditArea = async (values: any, id: number) => {
  try {
    const { data } = await api.put<APINebula.PostResponse>('/area/' + id, values);

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

export const ApiCreateMemberLevel = async (values: {
  member_name: string;
  area_id: number | string;
}) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/area/create/member', {
      name: values.member_name,
      area_id: values.area_id,
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

export async function ApiGetMemberLevel(options: object | undefined, areaId: number | string) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiArea>('/area/member/' + areaId, {
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

export const ApiEditPricingMember = async (v: any[]) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/area/pricing/member', v, {});

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
