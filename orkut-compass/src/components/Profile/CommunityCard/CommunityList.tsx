import React from "react";
import style from "./List.module.css";
import Icon from "./CommunityIcon";

function List() {
  return (
    <div className={style.Container}>
      <div className={style.ContainerIcon}>
        <Icon />
      </div>
    </div>
  );
}
export default List;
