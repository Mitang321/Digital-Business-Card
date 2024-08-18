import React, { useState } from "react";
import CardForm from "./components/CardForm";
import CardDisplay from "./components/CardDisplay";
import { Container } from "react-bootstrap";

function App() {
  const [cardData, setCardData] = useState(null);

  const handleCardCreation = (data) => {
    setCardData(data);
  };

  return (
    <Container className="my-4">
      <h1>Digital Business Card</h1>
      <CardForm onSubmit={handleCardCreation} />
      {cardData && <CardDisplay cardData={cardData} />}
    </Container>
  );
}

export default App;
