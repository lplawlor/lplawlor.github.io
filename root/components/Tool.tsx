import React from "react";
import Card from "react-bootstrap/Card";

const ICON_SIZE = 100;

function Tool({ icon, title, text }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <img src={icon} alt={`${title} Logo`} width={ICON_SIZE} />
          {title}
        </Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Tool;
