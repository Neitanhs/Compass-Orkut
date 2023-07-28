import React from "react";
import styles from "./Icon.module.css";
import friend_1 from "../../../assets/profileFriendsCard/friend_1.png";
import friend_2 from "../../../assets/profileFriendsCard/friend_2.png";
import friend_3 from "../../../assets/profileFriendsCard/friend_3.png";
import friend_4 from "../../../assets/profileFriendsCard/friend_4.png";
import friend_5 from "../../../assets/profileFriendsCard/friend_5.png";
import friend_6 from "../../../assets/profileFriendsCard/friend_6.png";
import friend_7 from "../../../assets/profileFriendsCard/friend_7.png";
import friend_8 from "../../../assets/profileFriendsCard/friend_8.png";
import friend_9 from "../../../assets/profileFriendsCard/friend_9.png";

const friendsAndIamges = [
  { friend: "Carro", image: friend_1 },
  { friend: "Desenhos", image: friend_2 },
  { friend: "Crazy", image: friend_3 },
  { friend: "Fofos", image: friend_4 },
  { friend: "Animes", image: friend_5 },
  { friend: "Leitura", image: friend_6 },
  { friend: "Meu ovo", image: friend_7 },
  { friend: "My books", image: friend_8 },
  { friend: "Cafeeee", image: friend_9 },
];

const FriendIcon: React.FC = () => {
  return (
    <>
      <div className={styles.Content}>
        {friendsAndIamges.map((item) => (
          <div key={item.friend} className="name">
            <img src={item.image} alt={item.friend} />
            <p>{item.friend}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendIcon;
