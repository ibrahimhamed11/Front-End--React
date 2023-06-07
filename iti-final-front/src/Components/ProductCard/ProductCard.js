import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';


export default function Sales(props) {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>اسم المنتج</Card.Title>
          <Card.Text>
            هذا نص وهمي سيتم استبداله بوصف المنتج. قمت فقط باضافته لغرض
            الاختبار.
          </Card.Text>
          <Card.Text>
            200EGP
          </Card.Text>
          <Button variant="primary">اضف الى العربه</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
