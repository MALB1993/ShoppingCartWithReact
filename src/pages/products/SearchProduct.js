import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../redux/products/ProductSlice';

const SearchProduct = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(searchProducts(query));
    };

    return (
        <Form className="d-flex mb-3" onSubmit={handleSearch}>
            <Form.Control
                type="search"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
                Search
            </Button>
        </Form>
    );
};

export default SearchProduct;
