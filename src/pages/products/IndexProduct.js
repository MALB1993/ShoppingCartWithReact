import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../../redux/products/ProductSlice';

import Loading from '../../components/partials/Loading';
import ProductList from '../../components/lists/products/ProductList';
import SearchProduct from './SearchProduct'; // اضافه کردن کامپوننت جستجو

const IndexProduct = () => {
    const dispatch = useDispatch();
    const { filteredProducts, status, error } = useSelector(state => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(fetchProductsStart());
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                if (data && data.products) {
                    dispatch(fetchProductsSuccess(data.products));
                } else {
                    throw new Error('Unexpected API response structure');
                }
            } catch (err) {
                dispatch(fetchProductsFailure(err.toString()));
            }
        };
    
        fetchProducts();
    }, [dispatch]);
    

    return (
        <div>
            <SearchProduct /> {/* نمایش کامپوننت جستجو */}
            {status === 'loading' && <Loading />}
            {status === 'failed' && <p>{error}</p>}
            {status === 'succeeded' && <ProductList products={filteredProducts} />}
        </div>
    );
};

export default IndexProduct;
