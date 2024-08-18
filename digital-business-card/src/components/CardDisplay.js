// src/components/CardDisplay.js
import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import QRCode from "qrcode.react";

const CardDisplay = ({ cardData }) => {
  const { name, title, company, email, phone, website, image } = cardData;
  const cardUrl = `http://192.168.1.12:3000/card/${encodeURIComponent(name)}`;

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card style={{ width: "100%" }} className="mx-auto mb-3 shadow-sm">
            {image && <Card.Img variant="top" src={image} alt="Card image" />}
            <Card.Body>
              <Card.Title className="text-center">{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">
                {title}
              </Card.Subtitle>
              <Card.Text>
                {company && (
                  <div>
                    <strong>Company:</strong> {company}
                  </div>
                )}
                {email && (
                  <div>
                    <strong>Email:</strong> {email}
                  </div>
                )}
                {phone && (
                  <div>
                    <strong>Phone:</strong> {phone}
                  </div>
                )}
                {website && (
                  <div>
                    <strong>Website:</strong> {website}
                  </div>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="text-center">
            <QRCode value={cardUrl} />
            <p className="mt-2">Scan to view card</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDisplay;
