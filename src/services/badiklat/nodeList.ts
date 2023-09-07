import { message } from 'antd';
import axios from 'axios';
import { isString } from 'lodash';
import api from '../../../config/axiosConfig';

type postErrorTypes = {
  data: {
    message: string;
    responseCode: number;
  };
};

export async function getListNode(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>('/list/node/v2', {
      method: 'GET',

      ...(options || {}),
    });

    return {
      // ...data,
      data: data.list_node,
      error: false,
      message: 'Success Get',
      responseCode: data.responseCode,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export const ApiSetUnsigned = async (values: {
  devEui: string;
  node_id: number | string;
  type_id: number | string;
}) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>('/unassigned/node', {
      devEui: values.devEui,
      node_id: values.node_id,
      typeId: values.type_id,
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

export const ApiSetInterval = async (values: { devEui: string; interval: number }) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>(
      `/action/node/interval/${values.devEui}/${values.interval * 60}`,
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

export const ApiSetValve = async (values: { devEui: string; status: boolean }) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>(
      `/action/node/valve/${values.devEui}/${values.status ? 1 : 0}`,
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
      if (d.data) {
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

export const ApiAddNode = async (values: {
  devEui: string;
  meter_id: string;
  installation_date: string;
  internalId?: number;
  tenantId?: number;
}) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>('/assigned/node', {
      devEui: values.devEui,
      meter_id: values.meter_id,
      installation_date: values.installation_date,
      internalId: values.internalId,
      tenantId: values.tenantId,
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

export async function getListNodeUnsigned(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>('/unassigned/node', {
      method: 'GET',

      ...(options || {}),
    });

    return {
      // ...data,
      data: data.list_node,
      error: false,
      message: 'Success Get',
      responseCode: data.responseCode,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export async function getListNodeLog(options: object | undefined, device_id: number) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>('/pagination/node/v2/' + device_id, {
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export async function getListNodeLogDaily(
  options: object | undefined,
  device_id: number,
  daylirange_start: string,
  dailyrange_end: string,
) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      '/pagination/node/sum/' + device_id + `/${daylirange_start}/${dailyrange_end}`,
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export const ApiAddNodeInstallation = async (values: {
  model: string;
  area_id: number;
  tenant_id: number;
  devEui: string;
  description: string;
  interval: number | string;
  latitude: string;
  longitude: string;
  meter_id: string;
}) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>('/device/register', {
      model: values.model,
      area_id: values.area_id,
      tenant_id: values.tenant_id,
      devEui: values.devEui,
      description: values.description,
      interval: values.interval,
      latitude: values.latitude,
      longitude: values.longitude,
      meter_id: values.meter_id,
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

export const ApiEditNodeInstallation = async (values: {
  devEui: string;
  tenantId: string;
  typeId: number;
  interval: string;
  description: string;
  installationDate: string;
  brand: string;
  latitude?: string;
  longitude?: string;
  address?: string;
  child_app_name: string;
  child_sn: string;
  high_alarm: string;
  low_alarm: string;
  sensor_to_bottom: string;
  id: number;
}) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>('/edit/node/' + values.id, {
      high_alarm: values.high_alarm,
      low_alarm: values.low_alarm,
      sensor_to_bottom: values.sensor_to_bottom,
      description: values.description,
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

export const ApiCheckNodeInstallation = async (values: { devEui: string }) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>('/device/check', {
      devEui: values.devEui,
    });

    return {
      ...data,
      data: data,
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
        data: null,
        responseCode: 400,
        message: error.response?.data?.message || error.message,
        error: true,
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occured');
      return {
        data: null,
        responseCode: 400,
        message: 'An unexpected error occured',
        error: true,
      };
    }
  }
};

export const ApiAddGatewayInstallation = async (values: {
  area_id: number;
  name: string;
  mac_id: string;
  address: string;
  latitude: string;
  longitude: string;
  description: string;
}) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>('/gateway', {
      area_id: values.area_id,
      name: values.name,
      mac_id: values.mac_id,
      address: values.address,
      latitude: values.latitude,
      longitude: values.longitude,
      description: values.description,
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

export const ApiCheckGatewayInstallation = async (values: { gateway_id: string }) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>('/check/gateway', {
      gateway_id: values.gateway_id,
    });

    return {
      ...data,
      data: data.list_node.raw,
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
        data: null,
        responseCode: 400,
        message: error.response?.data?.message || error.message,
        error: true,
      };
    } else {
      console.log('unexpected error: ', error);
      message.error('An unexpected error occured');
      return {
        data: null,
        responseCode: 400,
        message: 'An unexpected error occured',
        error: true,
      };
    }
  }
};

export const ApiSetUnsignedInstallation = async (values: {
  devEui: string;
  node_id: number | string;
}) => {
  try {
    const { data } = await api.post<APIBadiklat.PostResponse>(`/unsigned/node/${values.node_id}`);

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
      if (d.data.message && isString(d.data.message)) {
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

export async function getListReport(type: string, value: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.post<APIBadiklat.ApiListNode>('/unhan/report/' + type, {
      ...value,
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export async function apiGetListModalDashboardDetails(
  alert_type: string,
  options: object | undefined,
) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      alert_type == 'anomali'
        ? '/dashboard/mobile/alert/node/anomali'
        : '/dashboard/mobile/alert/' + alert_type,
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export async function apiGetListModalDashboardDetailsAnomali(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      '/dashboard/mobile/alert/node/anomali',
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export const ApiEditDescriptionDevice = async (values: { id: number; desc: string | null }) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>(`/edit/desc/node/${values.id}`, {
      description: values.desc,
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

export const ApiDeleteRoom = async (values: { id: number }) => {
  try {
    const { data } = await api.delete<APIBadiklat.PostResponse>(`/delete/tenant/${values.id}`);

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

export async function getListWaterLevelDashboard(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      '/dashboard/mobile/list/node/sedimentasi',
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }

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

export async function getGateway(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>('/gateway', {
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export async function getSettingParameter(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>('/dashboard/parameter/setting', {
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export const ApiEditWaterUsageSetting = async (values: {
  max_usage: number | null;
  min_usage: number | null;
  device_id_list: number[];
}) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>(`/dashboard/parameter/water/usage`, {
      max_usage: values.max_usage,
      min_usage: values.min_usage,
      device_id_list: values.device_id_list,
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

export const ApiEditWaterUsageAnomali = async (value: any[]) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>(
      `/dashboard/parameter/water/usage/anomali`,
      value,
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

export const ApiEditWaterVacuumParam = async (value: any[]) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>(`/dashboard/parameter/vakum`, value);

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

export async function getWaterUsageAnomaliList(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      '/dashboard/parameter/device/water/usage/anomali',
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export async function getWaterPressureVacuum(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>('/dashboard/parameter/device/vakum', {
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export async function getWaterUsageSettings(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      '/dashboard/parameter/device/water/usage',
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export const ApiEditWaterPressureSetting = async (value: any[]) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>(
      `/dashboard/parameter/pressure`,
      value,
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

export async function getWaterPressureSettings(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      '/dashboard/parameter/device/pressure',
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export const ApiEditWaterQualitySetting = async (values: {
  device_id_air_bersih: any[];
  device_id_air_limbah: any[];
}) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>(
      `/dashboard/parameter/water/quality`,
      {
        device_id_air_bersih: values.device_id_air_bersih,
        device_id_air_limbah: values.device_id_air_limbah,
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

export async function getWaterQualitySettings(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      '/dashboard/parameter/device/water/quality',
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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

export const ApiEditWaterProductionSetting = async (values: {
  device_id_air_bersih: string[];
  device_id_air_limbah: string[];
  device_id_air_lumpur: string[];
  device_id_air_baku: string[];
  device_id_tranmisi_indotaise: string[];
  device_id_tranmisi_indotaise_2: string[];
  device_id_transmisi_ki: string[];
  device_id_total_distribusi_ki: string[];
  device_id_sludge: string[];
}) => {
  try {
    const { data } = await api.patch<APIBadiklat.PostResponse>(
      `/dashboard/parameter/water/production`,
      {
        device_id_air_bersih: values.device_id_air_bersih,
        device_id_air_limbah: values.device_id_air_limbah,
        device_id_air_lumpur: values.device_id_air_lumpur,
        device_id_air_baku: values.device_id_air_baku,
        device_id_tranmisi_indotaise: values.device_id_tranmisi_indotaise,
        device_id_tranmisi_indotaise_2: values.device_id_tranmisi_indotaise_2,
        device_id_transmisi_ki: values.device_id_transmisi_ki,
        device_id_total_distribusi_ki: values.device_id_total_distribusi_ki,
        device_id_sludge: values.device_id_sludge,
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

export async function getWaterProductionSettings(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APIBadiklat.ApiListNode>(
      '/dashboard/parameter/device/water/production',
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
      const d = error.response as postErrorTypes;
      if (d.data.message) {
        message.error(d.data.message);
      } else {
        message.error(error.message);
      }
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
