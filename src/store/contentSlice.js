import {
  createSlice,
  createAsyncThunk,
  createSelector,
  current,
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

const postsSlice = createSlice({
  name: 'content',
  initialState: {},
  reducers: {
    removeFile(state, action) {
      delete state[action.payload.id];
      console.log(current(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContentById.fulfilled, (state, { payload }) => {
      state[payload.id] = payload.children;
    })
  },
})

const { actions, reducer } = postsSlice;

export const { removeFile } = actions;

const selectSelf = (state) => state.content;
export const selectContentById = id => createSelector(selectSelf, (state) => state[id] ?? []);

export default reducer;