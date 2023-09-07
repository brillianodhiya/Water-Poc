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
    const { data } = await api.get<APINebula.ApiListNode>('/list/node/v2', {
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

export const ApiSetUnsigned = async (values: {
  devEui: string;
  node_id: number | string;
  type_id: number | string;
}) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/unassigned/node', {
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

export const ApiSetInterval = async (values: { devEui: string; interval: number }) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>(
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

export const ApiSetValve = async (values: { devEui: string; status: boolean }) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>(
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

export const ApiAddNode = async (values: {
  devEui: string;
  meter_id: string;
  installation_date: string;
  internalId?: number;
  tenantId?: number;
}) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/assigned/node', {
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

export async function getListNodeUnsigned(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiListNode>('/unassigned/node', {
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

export async function getListNodeLog(options: object | undefined, device_id: number) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiListNode>('/pagination/node/v2/' + device_id, {
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

export async function getListNodeLogDaily(
  options: object | undefined,
  device_id: number,
  daylirange_start: string,
  dailyrange_end: string,
) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiListNode>(
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

export const ApiAddNodeInstallation = async (values: {
  devEui: string;
  installation_date: string;
  typeId?: number;
  interval?: number;
  description?: number;
}) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/register/node', {
      devEui: values.devEui,
      typeId: values.typeId,
      interval: values.interval,
      description: values.description,
      installationDate: values.installation_date,
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

export const ApiCheckNodeInstallation = async (values: { devEui: string }) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/check/node', {
      devEui: values.devEui,
    });

    return {
      ...data,
      data: data.list_node.messages,
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
        message: error.message,
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
  gateway_name: string;
  unit_model: string;
  mac_address: string;
  power_source: string;
  description?: string;
  installation_date: string;
  sim: string;
}) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/gateway', {
      gateway_name: values.gateway_name,
      unit_model: values.unit_model,
      mac_address: values.mac_address,
      power_source: values.power_source,
      description: values.description,
      installation_date: values.installation_date,
      sim: values.sim,
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

export const ApiCheckGatewayInstallation = async (values: { gateway_id: string }) => {
  try {
    const { data } = await api.post<APINebula.PostResponse>('/check/gateway', {
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
        message: error.message,
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
    const { data } = await api.post<APINebula.PostResponse>(
      `/remove/node/installation/${values.node_id}/${values.devEui}`,
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
      if (d.data.message && isString(d.data.message)) {
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

export async function getListReport(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiListNode>('/report', {
      ...options,
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

export async function getListReportNotif(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiListNode>('/dashboard/bita/report/notif', {
      ...options,
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

export async function apiGetListModalDashboardDetails(
  alert_type: string,
  options: object | undefined,
) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiListNode>(
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

export async function apiGetListModalDashboardDetailsAnomali(options: object | undefined) {
  // console.log(token, 'TOKEN');

  try {
    const { data } = await api.get<APINebula.ApiListNode>('/dashboard/mobile/alert/node/anomali', {
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
