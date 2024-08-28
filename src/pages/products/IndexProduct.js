import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../../redux/products/ProductSlice';

import Loading from '../../components/partials/Loading';
import ProductList from '../../components/lists/products/ProductList';

const IndexProduct = () => {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector(state => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(fetchProductsStart());
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                dispatch(fetchProductsSuccess(data));
            } catch (err) {
                dispatch(fetchProductsFailure(err.toString()));
            }
        };

        fetchProducts();
    }, [dispatch]);

    switch (status) {
        case 'loading':
            return <Loading />
        case 'failed':
            return <p>{error}</p>
        case 'succeeded':
            return <ProductList products={products} />
        default:
            return <Loading />;
    }
};

export default IndexProduct;
