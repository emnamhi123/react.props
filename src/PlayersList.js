import React from "react";
import Players from "./Players";
import Player from "./Player";

const PlayersList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "100px",
      }}
    >
      {Players.map((player, index) => (
        <Player Key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
