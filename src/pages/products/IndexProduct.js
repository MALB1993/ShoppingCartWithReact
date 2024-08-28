import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../../redux/products/ProductSlice';

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

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>{error}</p>;

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title	}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndexProduct;
