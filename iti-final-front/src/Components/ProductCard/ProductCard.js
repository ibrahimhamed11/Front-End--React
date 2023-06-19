import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './productCard.css'

export default function Sales({item}) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`http://localhost:4000/${item.image}`}  className="product-image"/>
        <Card.Body>
          <Card.Title className="product-title">{item.title}</Card.Title>
          <Card.Text className="product-description">
          {item.description}
          </Card.Text>
          <Card.Text>
          {item.price}$
          </Card.Text>
          <Button variant="warning" className="me-5">تعديل</Button>
          <Button variant="danger" className="me-5">حذف</Button>
        </Card.Body>
      </Card>
    </>
  );
}
