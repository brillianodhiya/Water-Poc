import { message } from 'antd';
import axios from 'axios';
import api from '../../../config/axiosConfig';

export const getChart = async (time: string) => {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiChart>(`/dashboard/chart/node/${time}/3`, {
      method: 'GET',
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
};

export async function getListAlert(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/bita', {
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

export async function getDataSparing(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/data/sparing', {
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

export async function getDataWaterProduction(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/bita/water/production', {
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

export async function getDataWaterLosses(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/bita/water/Losses', {
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
export async function getListWaterPressure(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/bita/water/pressure', {
      method: 'GET',

      ...(options || {}),
    });

    return {
      ...data,
      // data: data.data,
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

export async function getPressureVacuum(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/bita/water/vakum', {
      method: 'GET',

      ...(options || {}),
    });

    return {
      ...data,
      // data: data.data,
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
export async function getListAlertNotif(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/mobile/alert/node/notif', {
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

export async function getProduksiAir(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListAlert>(
      '/dashboard/grafik/internal/consumption',
      {
        ...options,
      },
    );

    return {
      // ...data,
      data: data.data,
      total: data.total,
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

export async function getTekananAir(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListAlert>(
      '/dashboard/grafik/internal/tekanan',
      {
        ...options,
      },
    );

    return {
      // ...data,
      data: data.data,
      total: data.total,
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
export async function getPemakaianAir(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListAlert>(
      '/dashboard/grafik/internal/pemakaian',
      {
        ...options,
      },
    );

    return {
      // ...data,
      data: data.data,
      total: data.total,
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

export async function getTenantConsumption(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListAlert>('/dashboard/grafik/konsumsi/tenant', {
      ...options,
    });

    return {
      // ...data,
      data: data.data,
      total: data.total,
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

export async function getWaterLosses(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListAlert>('/dashboard/grafik/losses/water', {
      ...options,
    });

    return {
      // ...data,
      data: data.data,
      total: data.total,
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

export async function getGrafikExternal(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/grafik/external', {
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

export async function getGrafikAirBersih(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>(
      '/dashboard/grafik/external/kualitas/air/bersih',
      {
        method: 'GET',

        ...(options || {}),
      },
    );

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
export async function getListAlertCard(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListAlert>('/dashboard/web/alert', {
      method: 'GET',

      ...(options || {}),
    });

    return {
      // ...data,
      data: data.data,
      warna: data.warna,
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

export async function getListAlertDetail(options: object | undefined, type: string) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListAlert>('/dashboard/web/alert/detail', {
      method: 'POST',
      data: { type: type },

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
