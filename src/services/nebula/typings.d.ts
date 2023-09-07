declare namespace APINebula {
  type LoginParams = {
    email: string;
    password: string;
    autoLogin: boolean;
  };

  type LoginResponse = {
    data: {
      profile: object;
      token: string;
      status?: string;
      type?: string;
      currentAuthority?: string;
      message?: string;
      token?: string;
    };
    profile: object;
    responseCode: number;
    token: string;
    status?: string;
    type?: string;
    currentAuthority?: string;
    message?: string;
    token?: string;
  };

  type PostResponse = {
    list_node?: any;
    responseCode: number;
    message?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
    token?: string;
  };

  type CurrentUser2 = {
    id?: number;
    company_id?: number;
    pricing_option?: number;
    automatic_bill?: number;
    email?: string;
    area_name?: string;
    username?: string;
    name?: string;
    stamp_number?: string;
    stamp_date?: unknown;
    pic_name?: string;
    phone?: string;
    address?: string;
    image?: string;
    handphone?: string;
    access?: string;
    role?: string;
  };

  type CurrentUser = {
    message: {
      id?: number;
      company_id?: number;
      pricing_option?: number;
      automatic_bill?: number;
      email?: string;
      area_name: string;
      username?: string;
      name?: string;
      stamp_number?: string;
      stamp_date?: unknown;
      pic_name?: string;
      phone?: string;
      address?: string;
      image?: string;
      handphone?: string;
      iots_cutoffs: [
        {
          areaId?: number;
          tenantId?: unknown;
          tanggal_cutoff?: number;
          order?: number;
          auto_bill_type?: number;
          status: unknown;
        },
      ][];
    };
    data?: {
      fullname?: string;
      email?: string;
    };
  };

  type ApiListTenant = {
    responseCode: number;
    list_tenant: array;
    data: array;
    error: false;
    message: string;
  };
  type ApiListUser = {
    responseCode: number;
    response: array;
    data: array;
    error: false;
    message: string;
  };
  type ApiMenu = {
    responseCode: number;
    response: array;
    data: array;
    error: false;
    message: string;
  };
  type ApiListAlert = {
    responseCode: number;
    response: array;
    data: array;
    error: false;
    message: string;
  };
  type ApiChart = {
    responseCode: number;
    payload: array;
    response: array;
    data: array;
    error: false;
    message: string;
  };
  type ApiUserProfile = {
    responseCode: number;
    response: array;
    data: object;
    error: false;
    message: string;
  };
  type ApiUserCompany = {
    responseCode: number;
    response: array;
    data: object;
    error: false;
    message: string;
  };
  type ApiArea = {
    responseCode: number;
    data: array;
    error: false;
    message: object;
  };
  type ApiTenant = {
    responseCode: number;
    data: array;
    error: false;
    message: object;
  };
  type ApiGateway = {
    responseCode: number;
    list_gateway: array;
    data: array;
    error: false;
    message: object;
  };
  type ApiNode = {
    responseCode: number;
    list_node: array;
    data: array;
    error: false;
    message: object;
  };

  type ApiListNode = {
    responseCode: number;
    list_node: array;
    data: array;
    error: false;
    message: string;
  };
  type ApiListDevice = {
    responseCode: number;
    list_node: array;
    data: array;
    error: false;
    message: string;
  };

  type ApiListEvent = {
    responseCode: number;
    payload: array;
    error: false;
    message: string;
  };

  type ApiListNodeType = {
    responseCode: number;
    list_type: array;
    data: array;
    error: false;
    message: string;
  };

  type ApiListInternal = {
    responseCode: number;
    list_internal: array;
    data: array;
    error: false;
    message: string;
  };

  type DefaultApiObj = {
    data?: null | object | array;
    error: boolean;
    message: string;
    responseCode: number;
  };
}
