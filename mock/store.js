import mockjs from 'mockjs';

const getStoreProductList = () => Object.assign({}, mockjs.mock({
  'list|1-3': [
    {
      'uuid|+1': 1,
      storeUuid: '1',
      name: 'product-1',
      description: '好吃',
      price: '10',
      description: '那是一种内在的东西，他们到达不了，也无法触及的',
      type: '香辣',
      sellOut: false,
      sale: '100',
      imageUrl: '',
      published: true,
    },
  ]
}), { count: 3 });

const getStore = [
  {
    uuid: '1',
    type: '饭堂',
    name: '',
    address: '',
    description: '',
    phone1: '',
    phone2: '',
    phone3: '',
  }
];

const createProduct = {
  uuid: '4',
  storeUuid: '',
  name: '',
  description: '',
  price: '',
  description: '',
  type: '',
  sellOut: false,
  sale: '',
  imageUrl: '',
  published: false,
}

function getStoreProductItem(req) {
  return req.body;
};

function updateStoreProductItem(req, res) {
  res.send({ message: 'Ok' });
}

export default {
  'GET /api/school-stores/:uuid/products': getStoreProductList,
  'GET /api/school-stores/:schoolId/stores/:uuid': getStore,
  'POST /api/school-stores/:uuid/product': createProduct,
  'GET /api/school-stores/:storeUuid/product/:uuid': getStoreProductItem,
  'PUT /api/school-stores/:storeUuid/product/:uuid': updateStoreProductItem,
};