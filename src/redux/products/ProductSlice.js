import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    filteredProducts: [],
    status: 'idle',
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
            state.filteredProducts = action.payload;
            state.status = 'succeeded';
        },
        fetchProductsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        searchProducts: (state, action) => {
            state.status = 'searching';
            const searchTerm = action.payload.toLowerCase();
            state.filteredProducts = state.products.filter(product => 
                product.title.toLowerCase().includes(searchTerm)
            );
            console.log();
            
        }
    },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, searchProducts } = productSlice.actions;

export default productSlice.reducer;
