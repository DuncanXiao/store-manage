import mockjs from 'mockjs';

const getStoreProductList = (req, res) => {
  const products = mockjs.mock({
    'list|40': [
      {
        'uuid|+1': 1,
        storeUuid: '1',
        'name|1': ['product-1', 'product-2', 'product-3', 'product-4'],
        'price|1': ['1', '10', '2', '5', '4'],
        description: '那是一种内在的东西，他们到达不了，也无法触及的',
        tags: mockjs.Random.pick(['香辣', '折扣']),
        sellOut: false,
        sale: '100',
        imageUrl: '',
        'published|1': [true, false],
      },
    ],
  });
  res.send(products.list);
};

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
  },
];

const createProduct = {
  uuid: '4',
  storeUuid: '',
  name: '',
  price: '',
  description: '',
  type: '',
  sellOut: false,
  sale: '',
  imageUrl: '',
  published: false,
};

function getStoreProductItem(req, res) {
  const { uuid, storeUuid } = req.query;
  res.send({
    uuid,
    storeUuid,
    name: 'product-1',
    price: '10',
    description: '那是一种内在的东西，他们到达不了，也无法触及的',
    tags: ['香辣'],
    sellOut: false,
    sale: 0,
    imageUrl: '',
    published: false,
  });
}

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
