import React from "react";

function MoveIcon({
  moveIconPath,
  onClick = null,
  isActive = false,
  height = "60px",
  width = "60px",
}) {
  const backgroundStyle = {
    backgroundImage: moveIconPath ? `url(${moveIconPath})` : null,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width,
    height,
  };

  if (!moveIconPath) {
    backgroundStyle.backgroundColor = "#6b7280";
  }

  return (
    <div
      className={`cursor rounded-full ${
        isActive ? "border-2 border-yellow-500" : null
      }`}
      style={backgroundStyle}
      onClick={onClick}
    ></div>
  );
}

export default MoveIcon;
