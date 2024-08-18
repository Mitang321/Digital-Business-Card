import React from "react";
import { Card, Container } from "react-bootstrap";
import QRCode from "qrcode.react";

const CardDisplay = ({ cardData }) => {
  return (
    <Container>
      <h2 className="my-4">Your Digital Business Card</h2>
      <Card
        style={{
          width: "18rem",
          backgroundColor: cardData.bgColor,
          color: cardData.textColor,
          border: `2px ${cardData.borderStyle} ${cardData.textColor}`,
        }}
      >
        {cardData.profilePicture && (
          <Card.Img variant="top" src={cardData.profilePicture} />
        )}
        <Card.Body>
          <Card.Title>{cardData.name}</Card.Title>
          <Card.Subtitle className="mb-2">{cardData.title}</Card.Subtitle>
          <Card.Text>{cardData.company}</Card.Text>
          <Card.Text>{cardData.email}</Card.Text>
          <Card.Text>{cardData.phone}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <QRCode value={cardData.cardURL} />
          <p className="mt-2">Scan to view card</p>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default CardDisplay;
