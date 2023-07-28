import React from "react";
import List from "./List";
import community_1 from "../../../assets/profileComunnitiesCard/community_1.png";
import community_2 from "../../../assets/profileComunnitiesCard/community_2.png";
import community_3 from "../../../assets/profileComunnitiesCard/community_3.png";
import community_4 from "../../../assets/profileComunnitiesCard/community_4.png";
import community_5 from "../../../assets/profileComunnitiesCard/community_5.png";
import community_6 from "../../../assets/profileComunnitiesCard/community_6.png";
import community_7 from "../../../assets/profileComunnitiesCard/community_7.png";
import community_8 from "../../../assets/profileComunnitiesCard/community_8.png";
import community_9 from "../../../assets/profileComunnitiesCard/community_9.png";

function FriendsCard() {
  return (
    <>
      <List
        names={[
          "Carro",
          "Desenhos",
          "Crazy",
          "Fofos",
          "Animes",
          "Leitura",
          "Meu ovo",
          "My books",
          "Cafeeee",
        ]}
        images={[
          community_1,
          community_2,
          community_3,
          community_4,
          community_5,
          community_6,
          community_7,
          community_8,
          community_9,
        ]}
      />
    </>
  );
}

export default FriendsCard;
