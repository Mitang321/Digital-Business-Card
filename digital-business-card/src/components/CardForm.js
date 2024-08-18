import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const CardForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    profilePicture: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <h2 className="my-4">Create Your Digital Business Card</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter your title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            placeholder="Enter your company"
            value={formData.company}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formProfilePicture">
          <Form.Label>Profile Picture URL</Form.Label>
          <Form.Control
            type="text"
            name="profilePicture"
            placeholder="Enter profile picture URL"
            value={formData.profilePicture}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Card
        </Button>
      </Form>
    </Container>
  );
};

export default CardForm;
