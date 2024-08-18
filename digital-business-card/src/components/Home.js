import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow p-4 bg-light rounded">
            <Card.Body>
              <Card.Title className="text-center mb-4">Welcome</Card.Title>
              <Card.Text className="text-center mb-4">
                Create and manage your digital business cards with ease.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Link to="/create">
                  <Button variant="primary" className="me-2">
                    Create New Card
                  </Button>
                </Link>
                <Link to="/view">
                  <Button variant="secondary">View Cards</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
