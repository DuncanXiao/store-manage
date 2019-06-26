import { createTag, getTags } from '@/services/tag';
import querystring from 'querystring';

export default {
  namespace: 'tags',

  state: {
    list: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getTags);
      yield put({
        type: 'getList',
        payload: response,
      });
    }
  },

  reducers: {
    getList(state, action) {
      return {
        ...state.list,
        list: action.payload,
      };
    }
  },
};
