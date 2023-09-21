/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // icon: 'smile',
    component: './Dashboard/Dashboard',
  },
  {
    path: '/dashboard/view_graphic',
    // name: 'Dashboard',
    // icon: 'smile',
    component: './Dashboard/ViewGraphicDevice',
  },
  {
    path: '/dashboard/notifications',
    // name: 'Dashboard',
    // icon: 'smile',
    component: './Dashboard/DeviceNotifications',
  },
  {
    path: '/dashboard/list_device',
    // name: 'Dashboard',
    // icon: 'smile',
    component: './Dashboard/ListDevice',
  },
  {
    path: '/device',
    name: 'Device',
    // icon: 'smile',
    component: './Device/Device',
  },
  {
    path: '/device/create',
    // name: 'Device Management',
    // icon: 'smile',
    component: './Device/AddDevice',
  },
  {
    path: '/device/:type',
    // name: 'Device Management',
    // icon: 'smile',
    component: './Device/Device',
  },
  {
    path: '/device/:type/:sub',
    // name: 'Device Management',
    // icon: 'smile',
    component: './Device/Device',
  },
  {
    path: '/gateway',
    name: 'Gateway',
    // icon: 'smile',
    component: './Gateway/index',
  },

  {
    path: '/gateway/create',
    // icon: 'smile',
    component: './Gateway/AddGateway',
  },
  {
    path: '/area',
    name: 'Area',
    // icon: 'smile',
    component: './Area Management/AreaManagement',
  },
  {
    path: '/area/create',
    // name: 'Add Area',
    // icon: 'smile',
    component: './Sub Area Management/AddArea',
  },
  {
    path: '/area/edit',
    // name: 'Add Area',
    // icon: 'smile',
    component: './Sub Area Management/EditArea',
  },
  {
    path: '/tenant/create',
    // name: 'Add Area',
    // icon: 'smile',
    component: './Sub Area Management/AddTenant',
  },
  {
    path: '/tenant/edit',
    // name: 'Add Area',
    // icon: 'smile',
    component: './Sub Area Management/EditTenant',
  },
  {
    path: '/area/info',
    // name: 'Sub Area',
    // icon: 'smile',
    component: './Sub Area Management/AreaInfo',
  },
  {
    path: '/area/tenant',
    // name: 'Sub Area',
    // icon: 'smile',
    component: './Sub Area Management/TenantInfo',
  },
  // {
  //   path: '/ticket',
  //   name: 'Ticket',
  //   // icon: 'smile',
  //   component: './Ticketing/Ticketing',
  // },
  // {
  //   path: '/ticket/create',
  //   // name: 'Ticket',
  //   // icon: 'smile',
  //   component: './Ticketing/AddTicket',
  // },
  {
    path: '/users',
    name: 'User',
    // icon: 'smile',
    component: './Users/Users',
  },
  // {
  //   path: '/settings',
  //   name: 'Setting',
  //   // icon: 'smile',
  //   component: './Settings/Settings',
  // },
  // {
  //   path: '/users/company',
  //   // name: 'User',
  //   // icon: 'smile',
  //   component: './Users/Company/Company',
  // },
  // {
  //   path: '/users/tenant',
  //   // name: 'User',
  //   // icon: 'smile',
  //   component: './Users/Tenant/Tenant',
  // },
  // {
  //   path: '/users/area',
  //   // name: 'User',
  //   // icon: 'smile',
  //   component: './Users/Area/Area',
  // },

  // {ub Area Management/TenantInfo
  //   path: '/overview/:page',
  //   name: 'Overview',
  //   // icon: 'smile',
  //   component: './Overview/Overview',
  // },
  // {
  //   path: '/overview/:page/:subpage',
  //   name: 'Sub Overview',
  //   // icon: 'smile',
  //   // layout: false,
  //   component: './Overview/Overview',
  // },
  // {
  //   path: '/overview/:page/:subpage/:subsubpage',
  //   name: 'Sub Overview',
  //   // icon: 'smile',
  //   // layout: false,
  //   component: './Overview/Overview',
  // },

  {
    path: '/transaction',
    name: 'Transaction',
    component: './Transaction/Transaction',
  },

  // {
  //   path: '/reports',
  //   name: 'Usage',
  //   // icon: 'smile',
  //   component: './Reports/Reports',
  // },
  // {
  //   path: '/billing',
  //   name: 'Billing',
  //   // icon: 'smile',
  //   component: './Billing/Billing',
  // },
  {
    path: '/billing/detail/:id',
    // icon: 'smile',
    component: './Billing/BillingInfo',
  },
  {
    path: '/notification',
    name: 'Notification',
    // icon: 'smile',
    component: './Reports/ReportsNotif',
  },

  {
    path: '/users/company/detail',
    // name: 'Profile',
    // icon: 'smile',
    component: './SubUsers/DetailCompany',
  },
  {
    path: '/users/company/create',
    // name: 'Profile',
    // icon: 'smile',
    component: './SubUsers/AddCompany',
  },
  {
    path: '/users/area/detail',
    // name: 'Profile',
    // icon: 'smile',
    component: './SubUsers/DetailArea',
  },
  {
    path: '/users/area/create',
    // name: 'Profile',
    // icon: 'smile',
    component: './SubUsers/AddArea',
  },
  {
    path: '/users/tenant/detail',
    // name: 'Profile',
    // icon: 'smile',
    component: './SubUsers/DetailTenant',
  },
  {
    path: '/users/create',
    // name: 'Profile',
    // icon: 'smile',
    component: './SubUsers/AddTenant',
  },
  // {
  //   path: '/users/company/:type',
  //   component: './Users/Company/Company',
  // },
  // {
  //   path: '/users/area/:type',
  //   component: './Users/Area/Area',
  // },
  // {
  //   path: '/users/area/edit',
  //   component: './SubUsers/EditArea',
  // },
  {
    path: '/users/edit',
    component: './SubUsers/EditTenant',
  },
  {
    path: '/users/company/edit',
    component: './SubUsers/EditCompany',
  },
  {
    path: '/users/company/password',
    component: './SubUsers/ChangePassword',
  },
  {
    path: '/users/area/password',
    component: './SubUsers/ChangePassword',
  },
  {
    path: '/users/tenant/password',
    component: './SubUsers/ChangePassword',
  },

  // {
  //   path: '/account/area',
  //   // name: 'Profile',
  //   // icon: 'smile',
  //   component: './Overview/Area',
  // },
  // {
  //   path: '/welcome',
  //   name: 'welcome',
  //   icon: 'smile',
  //   component: './Welcome',
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     {
  //       path: '/admin/sub-page',

  //       name: 'sub-page',
  //       component: './Admin',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/dashboard',
  },
  // {
  //   path: '/reports',
  //   redirect: '/reports/room',
  // },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
