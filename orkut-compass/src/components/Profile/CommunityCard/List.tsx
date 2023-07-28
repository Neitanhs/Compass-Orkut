import React from "react";
import style from "./List.module.css";
import Icon from "./Icon";

interface ListProps {
  names: string[];
}

const List: React.FC<ListProps> = ({ names }) => {
  return (
    <div className={style.Content}>
      {names.map((name) => (
        <Icon key={name} name={name} />
      ))}
    </div>
  );
};

export default List;
