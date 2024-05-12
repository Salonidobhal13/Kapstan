import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApplicationData = createAsyncThunk(
  'data/fetchApplicationData',
  async () => {
    const response = await axios.get('https://retoolapi.dev/71NNjB/applications');
    return response;
  }
);

export const fetchCpuData = createAsyncThunk(
  'data/fetchCpuData',
  async () => {
    const response = await axios.get('https://retoolapi.dev/Ymxfa2/cpuutilization');
    return response;
  }
);

export const fetchMemoryData = createAsyncThunk(
  'data/fetchMemoryData',
  async () => {
    const response = await axios.get('https://retoolapi.dev/ybFVVH/memoryutilization');
    return response;
  }
);

export const fetchHistoryData = createAsyncThunk(
  'data/fetchHistoryData',
  async () => {
    const response = await axios.get('https://retoolapi.dev/TYjDIe/eventhistory');
    return response;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {},
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchData.pending, state => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchData.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchData.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     });
  // }
});

export default dataSlice.reducer;