import { Card, Container, Row, Col, Button, Badge, ButtonGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductList = ({ products }) => {

    return (
        <Container>
            <Row className='g-3'>
                {products.map(product => (
                    <Col md={3} sm={6} key={product.id}>
                        <Card>
                            <Card.Img variant="top" src={product.thumbnail} alt={product.title} />
                            <Card.Body>
                                <Card.Title className='fs-6 fw-bold'>{product.title} - {product.brand}</Card.Title>
                                <Card.Text>
                                    <p className='mb-1'><strong>Category:</strong> {product.category}</p>
                                    <p className='mb-1'><strong>Description:</strong> {product.description}</p>
                                    <p className='mb-1'><strong>Stock:</strong> {product.stock}</p>
                                    <p className='mb-1'><strong>Price:</strong> ${product.price}</p>
                                    <hr />
                                    <div className='d-flex align-items-center mb-2'>
                                        <Rating
                                            emptySymbol={<img src="/images/star-empty.png" className="icon" width={20} height={20} alt="Empty star" />}
                                            fullSymbol={<img src="/images/star-full.png" className="icon" width={20} height={20} alt="Full star" />}
                                            initialRating={product.rating}
                                            readonly
                                        />
                                        <span className='ms-2'>{product.rating}</span>
                                    </div>
                                    <hr />
                                    <div>
                                        {product.tags.map((tag, index) => (
                                            <Badge key={`${product.id}-tag-${index}`} bg="dark" className='p-1 mx-1'>
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </Card.Text>
                                <ButtonGroup aria-label="product actions">
                                    <Button variant="outline-dark" size="sm" className='me-2'>
                                        <i className='bi bi-basket'></i> Add to Cart
                                    </Button>
                                    <Button variant="outline-primary" size="sm">
                                        <i className='bi bi-eye'></i> View Details
                                    </Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
