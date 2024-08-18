// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
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
    localStorage.setItem("cardData", JSON.stringify(data));
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCreateNewClick = () => {
    setCardData(null);
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    localStorage.removeItem("cardData");
    setCardData(null);
    setIsEditing(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isEditing || !cardData ? (
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
                    <Button
                      variant="danger"
                      onClick={handleDeleteClick}
                      className="ml-2"
                    >
                      Delete Card
                    </Button>
                  </div>
                </>
              )
            }
          />
          <Route path="/card/:name" element={<CardFromURL />} />
        </Routes>
      </div>
    </Router>
  );
}

function CardFromURL() {
  const { name } = useParams();
  const savedCardData = JSON.parse(localStorage.getItem("cardData"));

  if (savedCardData && savedCardData.name === decodeURIComponent(name)) {
    return <CardDisplay cardData={savedCardData} />;
  }

  return <p>No card found for {name}</p>;
}

export default App;
