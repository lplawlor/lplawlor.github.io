import React from "react";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";

const ICON_SIZE = 100;

function Tool({ icon, title, text }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <Icon icon={icon} width={ICON_SIZE} />
          {title}
        </Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Tool;
