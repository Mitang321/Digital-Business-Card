import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Image,
} from "react-bootstrap";
import CardReview from "./CardReview";

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

  const [imagePreview, setImagePreview] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setImagePreview(initialData.image || "");
    }
  }, [initialData]);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (formData.phone && !/^\d+$/.test(formData.phone))
      errors.phone = "Phone number is invalid";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, [name]: reader.result });
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setReviewMode(true);
    }
  };

  const handleConfirm = (data) => {
    onSubmit(data);
    setShowSuccess(true);
    setReviewMode(false);
  };

  const handleEdit = () => {
    setReviewMode(false);
  };

  if (reviewMode) {
    return (
      <CardReview
        cardData={formData}
        onConfirm={handleConfirm}
        onEdit={handleEdit}
      />
    );
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
            <h3 className="text-center mb-4">
              {initialData ? "Edit Card" : "Create Card"}
            </h3>
            {showSuccess && (
              <Alert variant="success">
                Card successfully {initialData ? "updated" : "created"}!
              </Alert>
            )}
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!formErrors.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.name}
              </Form.Control.Feedback>
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
                isInvalid={!!formErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!formErrors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.phone}
              </Form.Control.Feedback>
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
                  className="mt-3 rounded"
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
