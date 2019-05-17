import React from "react";
import MeteoriteItem from "./MeteoriteItem";

const MeteoriteList = ({ meteorites }) => {
  return (
    <div>
      {meteorites.map((meteorite, i) => {
        return <MeteoriteItem name={meteorites[i].name} />;
      })}
    </div>
  );
};

export default MeteoriteList;
