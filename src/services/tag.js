import request from '@/utils/request';

export async function getTags() {
  return request('/api/store-product/1/tags', {
    method: 'GET'
  });
}
