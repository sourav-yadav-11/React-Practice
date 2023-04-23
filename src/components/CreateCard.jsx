import React from "react";
import Card from "./Card";

function CreateCard(props) {
  return (
    <Card
      key={props.id}
      name={props.name}
      img={props.imgURL}
      tel={props.phone}
      email={props.email}
    />
  );
}

export default CreateCard;
