import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

export const fetchContentById = createAsyncThunk(
  'content/fetchById',
  async (id) => {
    const requestUrl = new URL(process.env.REACT_APP_API_URL);
    const requestParams = {};
    if (id) requestParams.dirId = id;
    requestUrl.search = new URLSearchParams(requestParams);
    const resp = await fetch(requestUrl);
    const data = await resp.json();
    return data;
  }
)

const contentSlice = createSlice({
  name: 'content',
  initialState: {},
  reducers: {
    removeFile(state, action) {
      const removeChilds = id => {
        state[id]?.children?.forEach(removeChilds)
        delete state[id];
      }
      if (state[action.payload]?.children) {
        state[action.payload].children.forEach(removeChilds);
        state[action.payload].children = [];
        state[action.payload].status = 'folder';
      }
    },
  },
  extraReducers: {
    [fetchContentById.pending]: (state, { meta }) => {
      if (meta.arg === 0) state[meta.arg] = {};
      state[meta.arg].status = 'loading';
    },
    [fetchContentById.rejected]: (state, { meta }) => {
      state[meta.arg].status = 'notLoaded';
    },
    [fetchContentById.fulfilled]: (state, { payload }) => {
      payload.children = payload.children.map(item => {
        item.status = item.children ? 'folder' : 'file';
        state[item.id] = item;
        return item.id;
      });
      payload.status = 'opened';
      state[payload.id] = payload;
    },
  },
})

const { actions, reducer } = contentSlice;

export const { removeFile } = actions;

const selectSelf = (state) => state.content;
export const selectContentById = id => createSelector(selectSelf, (state) => state[id]);

export default reducer;