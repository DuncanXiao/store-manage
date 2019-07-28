import { createProduct, updateProduct, getProduct, getProductList } from '@/services/store';
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
        type: 'saveItem',
        payload: response,
      });
      yield put(routerRedux.push(`/list/product-list/${response.uuid}`));
    },
    *updateSave({ payload }, { call, put }) {
      const response = yield call(updateProduct, payload);
      yield put({
        type: 'saveItem',
        payload: response,
      });
      message.success('更新成功');
    },
    *fetchItem({ payload }, { call, put }) {
      const response = yield call(getProduct, payload);
      yield put({
        type: 'saveItem',
        payload: response,
      });
    },
    *fetchList({ payload }, { call, put }) {
      const response = yield call(getProductList, payload);
      yield put({
        type: 'saveList',
        payload: response,
      });
    }
  },
  reducers: {
    saveItem(state, action) {
      return {
        ...state,
        item: action.payload,
      };
    },
    saveList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    }
  },
}
