import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const FilterProductSlide = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      // Gán danh sách sản phẩm mới
      state.products = action.payload;
    },
    clearProducts: (state) => {
      // Xoá toàn bộ danh sách sản phẩm
      state.products = [];
    },
  },
});

export const { setProducts, clearProducts } = FilterProductSlide.actions;

export default FilterProductSlide.reducer;