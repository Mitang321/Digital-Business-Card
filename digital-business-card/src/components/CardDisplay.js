import React from "react";
import { Card, Container } from "react-bootstrap";

const CardDisplay = ({ cardData }) => {
  return (
    <Container>
      <h2 className="my-4">Your Digital Business Card</h2>
      <Card style={{ width: "18rem" }}>
        {cardData.profilePicture && (
          <Card.Img variant="top" src={cardData.profilePicture} />
        )}
        <Card.Body>
          <Card.Title>{cardData.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {cardData.title}
          </Card.Subtitle>
          <Card.Text>{cardData.company}</Card.Text>
          <Card.Text>{cardData.email}</Card.Text>
          <Card.Text>{cardData.phone}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardDisplay;
