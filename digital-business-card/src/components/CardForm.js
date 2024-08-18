import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";

const CardForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Form onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">
              {initialData ? "Edit Card" : "Create Card"}
            </h3>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter your website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
              {formData.image && (
                <Image
                  src={formData.image}
                  alt="Image preview"
                  fluid
                  className="mt-3"
                />
              )}
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3 w-100">
              {initialData ? "Update Card" : "Create Card"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CardForm;
