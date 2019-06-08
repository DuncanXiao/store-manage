const getStoreProduct = [
  {
    name: 'product-1',
    description: '好吃',
    price: 10,
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    type: '香辣',
    sellOut: false,
    sale: 100,
    imageUrl: '',
  },
  {
    name: 'product-2',
    description: '好吃a',
    price: 10,
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    type: '甜品',
    sellOut: false,
    sale: 100,
    imageUrl: '',
  }
];

const getStore = [
  {
    uuid: '123-123',
    type: '饭堂',
    name: '',
    address: '',
    description: '',
    phone1: '',
    phone2: '',
    phone3: '',
  }
];

export default {
  'GET /api/school-stores/:uuid/products': getStoreProduct,
  'GET /api/school-stores/:schoolId/stores/:uuid': getStore
};