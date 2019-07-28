import request from '@/utils/request';

export async function createProduct(params) {
  return request(`/api/school-stores/1/product`, {
    method: 'POST',
    data: params,
  });
}

export async function updateProduct(params) {
  return request(`/api/school-stores/1/product/${params.uuid}`, {
    method: 'PUT',
    data: params,
  });
}

export async function getProduct(params) {
  return request('/api/school-stores/1/product/4', {
    method: 'GET',
    data: params,
  });
}

export async function getProductList(params) {
  return request('/api/school-stores/1/products', {
    method: 'GET',
    data: params,
  });
}
