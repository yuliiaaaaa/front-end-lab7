import React from "react";

export const Image = () => {
  return (
    <>
      <a
        href="https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D1%80%D0%B8%D0%B6"
        target="_blank"
      >
        <div className="image-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pont_des_Arts%2C_Paris.jpg/1000px-Pont_des_Arts%2C_Paris.jpg"
            alt="Париж"
          />
        </div>
      </a>
      <div className="buttons-block">
        <button id="add-button">Додати</button>
        <button id="increase-button">Збільшити</button>
        <button id="decrease-button">Зменшити</button>
        <button id="delete-button">Видалити</button>
      </div>
    </>
  );
};
