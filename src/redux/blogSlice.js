import { createSlice } from "@reduxjs/toolkit";
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    addBlogsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addBlogsSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs.push(action.payload);
      state.error = false;
    },
    addBlogsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getBlogsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    getBlogsSuccess: (state, action) => {
      state.isFetching = true;
      state.blogs = action.payload;
      state.isFetching = false;
    },
    getBlogsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateBlogStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateBlogSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs[
        state.blogs.findIndex((blog) => blog._id === action.payload._id)
      ] = action.payload.blog;
    },
    updateBlogFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteBlogStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isFetching = false;
    },
    deleteBlogSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs.splice(
        state.blogs.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteBlogFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addBlogsStart,
  addBlogsSuccess,
  addBlogsFailure,
  getBlogsStart,
  getBlogsSuccess,
  getBlogsFailure,
  updateBlogStart,
  updateBlogSuccess,
  updateBlogFailure,
  deleteBlogStart,
  deleteBlogSuccess,
  deleteBlogFailure,
} = blogSlice.actions;
export default blogSlice.reducer;
