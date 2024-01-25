import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} style={{ height: "400px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            team: {team}
            <br />
            nationality: {nationality}
            <br />
            jerseyNumber: {jerseyNumber}
            <br />
            age: {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
