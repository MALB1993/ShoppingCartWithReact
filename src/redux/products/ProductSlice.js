import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    filteredProducts: [], // اضافه کردن برای نگهداری محصولات فیلتر شده
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
            state.products = action.payload;
            state.filteredProducts = action.payload; // در ابتدا همه محصولات نمایش داده می‌شود
            state.status = 'succeeded';
        },
        fetchProductsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        searchProducts: (state, action) => {
            state.status = 'succeeded'; // تغییر وضعیت به succeeded بعد از جستجو
            const searchTerm = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter(product => 
                product.title.toLowerCase().includes(searchTerm)
            );
        }
    },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, searchProducts } = productSlice.actions;

export default productSlice.reducer;
