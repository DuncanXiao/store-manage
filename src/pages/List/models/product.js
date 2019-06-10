import { createProduct, updateProduct } from '@/services/store';
import { routerRedux } from 'dva/router';
import { message } from 'antd';

export default {
  namespace: 'product',
  state: {
    list: [],
    item: {},
  },
  effects: {
    *create({ payload }, { call, put }) {
      const response = yield call(createProduct, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      yield put(routerRedux.push(`/list/product-list/${response.uuid}`));
    },
    *updateSave({ payload }, { call, put }) {
      const response = yield call(updateProduct, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      message.success('更新成功');
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        item: action.payload,
      };
    },
  },
}
