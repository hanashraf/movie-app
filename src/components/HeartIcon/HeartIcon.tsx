import React from "react";
import FilledHeart from "../HeartShape/FilledHeart";
import EmptyHeart from "../HeartShape/EmptyHeart";

type HeartIconProps = { isFavourite: boolean; toggleFavourite: () => void };

const HeartIcon = ({ isFavourite, toggleFavourite }: HeartIconProps) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        toggleFavourite();
      }}
    >
      {isFavourite ? <FilledHeart /> : <EmptyHeart />}
    </div>
  );
};

export default HeartIcon;
