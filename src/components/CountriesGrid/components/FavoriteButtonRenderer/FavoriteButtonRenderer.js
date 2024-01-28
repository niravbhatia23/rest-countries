import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { Favorites } from "../../../../api/favorites";

export const FavoriteButtonRenderer = ({ data: { name } }) => {
  const [isFavorite, setIsFavorite] = useState(Favorites.isFavorite(name));

  const handleClickFavorite = () => {
    setIsFavorite(Favorites.toggleFavorite(name));
  };

  return (
    <IconButton onClick={handleClickFavorite}>
      {isFavorite ? (
        <FavoriteIcon fontSize="small" />
      ) : (
        <FavoriteBorder fontSize="small" />
      )}
    </IconButton>
  );
};
