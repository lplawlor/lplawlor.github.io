import Card from "react-bootstrap/Card";
import { IconifyIcon } from "@iconify/types";
import { Icon } from "@iconify/react";

const ICON_SIZE = 100;

type ToolProps = {
  icon: IconifyIcon;
  title: string;
  text: string;
};

function Tool({ icon, title, text }: ToolProps) {
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
