// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Link,
} from "react-router-dom";
import CardForm from "./components/CardForm";
import CardDisplay from "./components/CardDisplay";
import Home from "./components/Home";
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
    setIsEditing(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create"
            element={
              <CardForm onSubmit={handleFormSubmit} initialData={cardData} />
            }
          />
          <Route
            path="/view"
            element={
              <>
                {cardData ? (
                  <>
                    <CardDisplay cardData={cardData} />
                    <div className="text-center mt-3">
                      <Button variant="secondary" onClick={handleEditClick}>
                        Edit Card
                      </Button>
                      <Button
                        variant="danger"
                        onClick={handleDeleteClick}
                        className="ms-2"
                      >
                        Delete Card
                      </Button>
                      <Link to="/create">
                        <Button variant="primary" className="ms-2">
                          Create New Card
                        </Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="text-center mt-3">
                    <Button variant="primary" onClick={handleCreateNewClick}>
                      Create New Card
                    </Button>
                  </div>
                )}
              </>
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

  return <p className="text-center mt-5">No card found for {name}</p>;
}

export default App;
