import React from "react";

function MoveIcon({
  moveIconPath,
  onClick = null,
  isActive = false,
  height = "60px",
  width = "60px",
}) {
  const iconUrl = moveIconPath ? `${moveIconPath}` : null;

  const backgroundStyle = {
    width,
    height,
  };

  if (!moveIconPath) {
    backgroundStyle.backgroundColor = "#6b7280";
  }

  return (
    <img
      src={require(`@/${iconUrl}`).default}
      alt="move"
      className={`cursor rounded-full ${
        isActive ? "border-2 border-yellow-500" : null
      }`}
      style={backgroundStyle}
      onClick={onClick}
    />
  );
}

export default MoveIcon;
