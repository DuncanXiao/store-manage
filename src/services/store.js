import request from '@/utils/request';

export async function createProduct(params) {
  return request(`/api/school-stores/1/product`, {
    method: 'POST',
    data: params,
  });
}

export async function updateProduct(params) {
  return request('/api/school-stores/1/product/4', {
    method: 'PUT',
    data: params,
  });
}
