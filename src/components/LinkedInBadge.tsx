import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import linkedInIcon from "../assets/linkedin.svg";
import profile_pic from "../assets/profile_pic.png";
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
      <Card.Body className="text-center">
        <Image src={profile_pic} width={100} roundedCircle className="mb-2" />
        <Card.Title>
          <b>Liam Lawlor</b>
        </Card.Title>
        <Card.Text>B.Sc. in Computer Science</Card.Text>
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
