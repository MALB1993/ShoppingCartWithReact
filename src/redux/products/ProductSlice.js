// redux/products/ProductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    status: 'idle', // 'loading', 'succeeded', 'failed'
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.status = 'loading';
        },
        fetchProductsSuccess: (state, action) => {
            state.products = action.payload.products; // Make sure data structure matches
            state.status = 'succeeded';
        },
        fetchProductsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;
