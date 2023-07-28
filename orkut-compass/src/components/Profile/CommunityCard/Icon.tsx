import React from "react";
// import styles from "./Icon.module.css";

interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return (
    <div>
      <img src="" alt="Icon" />
      <p>{name}</p>
    </div>
  );
};

export default Icon;
