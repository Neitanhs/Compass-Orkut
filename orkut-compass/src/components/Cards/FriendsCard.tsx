import React from "react";
import List from "./List";

function FriendsCard() {
  return (
    <>
      <List
        names={[
          "João",
          "Maria",
          "José",
          "Felipe",
          "Pedro",
          "Tania",
          "Mauricio",
          "Carlos",
          "Mario",
        ]}
      />
    </>
  );
}

export default FriendsCard;
