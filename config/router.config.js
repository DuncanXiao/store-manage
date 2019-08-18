export default [
  // store
  {
    path: '/store',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/store', redirect: '/store/login' },
      { path: '/store/login', name: 'login', component: './User/Login' },
      { path: '/store/register', name: 'register', component: './User/Register' },
      {
        path: '/store/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/product-list',
            name: 'searchproduct',
            component: './List/ProductList',
          },
          {
            path: '/list/product-list/:uuid',
            name: 'productdetail',
            hideInMenu: true,
            component: './List/ProductDetail',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
