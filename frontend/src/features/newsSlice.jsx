import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const NEWS_API_KEY = 'e56a06325f4d46e28a36a4578177a1e2';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = createAsyncThunk('news/fetchNews', async ({ category, query, page }) => {
  const params = {
    apiKey: NEWS_API_KEY,
    country: 'us',
    page,
    pageSize: 10,
  };
  if (category) params.category = category;
  if (query) params.q = query;

  const response = await axios.get(`${BASE_URL}/top-headlines`, { params });
  return response.data.articles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
