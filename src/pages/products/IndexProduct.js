import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../../redux/products/ProductSlice';
import { Card, Container, Row, Col, Button, Badge } from 'react-bootstrap';
import Rating from 'react-rating';

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
        <Container>
            <Row className='g-3'>
                {products.map(product => (
                    <Col md={3} sm={6} key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.thumbnail} alt={product.name} />
                            <Card.Body>
                                <Card.Title className='fs-6 fw-bold'>{product.title} - { product.brand }</Card.Title>
                                <Card.Text>
                                    <p>{product.description}</p>
                                    <p>Stock : {product.stock}</p>
                                    <p>Price : ${product.price}</p>
                                    {product.tags.map(tag => (
                                        <Badge bg="dark" className='p-2 mx-1'>{tag}</Badge>
                                    ))}
                                    <div>
                                        <Rating emptySymbol={<img src="/images/star-empty.png" className="icon" width={20} height={20}/>} fullSymbol={<img src="/images/star-full.png" className="icon" width={20} height={20}/>} initialRating={product.rating} readonly />
                                    </div>
                                </Card.Text>
                                <Button variant="primary">Add to basket</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default IndexProduct;
