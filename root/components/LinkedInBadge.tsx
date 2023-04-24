import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import linkedInIcon from "../assets/linkedin.svg";
import "../styles/LinkedInBadge.css";

function LinkedInBadge() {
  return (
    <Card border="info">
      <Card.Header>
        <img
          id="linkedin-icon"
          src={linkedInIcon}
          width="100em"
          className="me-5"
        />
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <b>Liam Lawlor</b>
        </Card.Title>
        <Card.Text>
          Computer Science Student at Memorial University of Newfoundland
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-info"
            href="https://linkedin.com/in/liamplawlor"
          >
            View Profile
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LinkedInBadge;
