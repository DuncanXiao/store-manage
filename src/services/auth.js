import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/auth/school-stores/login', {
    method: 'POST',
    data: params,
  });
}

export async function fakeRegister(params) {
  return request('/auth/school-stores/registry', {
    method: 'POST',
    data: params,
  });
}