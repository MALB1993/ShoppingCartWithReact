import { Card, Container, Row, Col, Button, Badge, ButtonGroup } from 'react-bootstrap';
import Rating from 'react-rating';

const ProductList = ({ products }) => {
    return (
        <Container>
            <Row className='g-3'>
                {products.map(product => (
                    <Col md={3} sm={6} key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.thumbnail} alt={product.name} />
                            <Card.Body>
                                <Card.Title className='fs-6 fw-bold'>{product.title} - {product.brand}</Card.Title>
                                <Card.Text>
                                    <p>{product.category}</p>
                                    <p>{product.description}</p>
                                    <p>Stock : {product.stock}</p>
                                    <p>Price : ${product.price}</p>
                                    <hr />
                                    <div>
                                        <Rating emptySymbol={<img src="/images/star-empty.png" className="icon" width={20} height={20} />} fullSymbol={<img src="/images/star-full.png" className="icon" width={20} height={20} />} initialRating={product.rating} readonly />
                                    </div>
                                    <hr />
                                    {product.tags.map(tag => (
                                        <Badge bg="dark" className='p-1 mx-1'>{tag}</Badge>
                                    ))}
                                </Card.Text>
                                <ButtonGroup aria-label="product button">
                                    <Button variant="btn btn-sm btn-outline-dark"><i className='bi bi-basket'></i></Button>
                                    <Button variant="btn btn-sm btn-outline-primary"><i className='bi bi-eye'></i></Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList;