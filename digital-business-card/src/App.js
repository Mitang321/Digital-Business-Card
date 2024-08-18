// src/App.js
import React, { useState, useEffect } from "react";
import CardForm from "./components/CardForm";
import CardDisplay from "./components/CardDisplay";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cardData, setCardData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedCardData = localStorage.getItem("cardData");
    if (savedCardData) {
      setCardData(JSON.parse(savedCardData));
    }
  }, []);

  const handleFormSubmit = (data) => {
    setCardData(data);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCreateNewClick = () => {
    setCardData(null);
    setIsEditing(true);
  };

  return (
    <div className="App">
      {isEditing || !cardData ? (
        <CardForm onSubmit={handleFormSubmit} initialData={cardData} />
      ) : (
        <>
          <CardDisplay cardData={cardData} />
          <div className="text-center mt-3">
            <Button variant="secondary" onClick={handleEditClick}>
              Edit Card
            </Button>
            <Button
              variant="primary"
              onClick={handleCreateNewClick}
              className="ml-2"
            >
              Create New Card
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
