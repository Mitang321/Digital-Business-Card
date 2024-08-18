import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="text-center shadow-lg rounded-lg">
            <Card.Body>
              <Card.Title as="h1" className="mb-4">
                Welcome to the Digital Business Card App
              </Card.Title>
              <Card.Text className="mb-4">
                Create and manage your digital business card with ease.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="create-new-card-tooltip">
                      Create or Edit Card
                    </Tooltip>
                  }
                >
                  <Button
                    variant="primary"
                    href="/create"
                    className="mx-2 home-button"
                  >
                    {window.location.pathname === "/"
                      ? "Edit Card"
                      : "Create New Card"}
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="view-card-tooltip">View Card</Tooltip>}
                >
                  <Button
                    variant="secondary"
                    onClick={handleShow}
                    className="mx-2 home-button"
                  >
                    View Card
                  </Button>
                </OverlayTrigger>
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              &copy; 2024 Digital Business Card
            </Card.Footer>
          </Card>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>View Card</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                No card data available yet. Please create or edit a card to view
                it here.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
