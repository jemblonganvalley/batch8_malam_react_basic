import React from "react";
import "./card.css";

function Card({ title = "Ini Judul Card", image, content, date, author }) {
  return (
    <div className="card">
      <div className="card_header">
        <h3 className="ch_title">{title}</h3>
      </div>

      <div className="card_body">
        <img src={image} alt="" className="cd_image" />
        <p className="cb_content">{content}</p>
      </div>

      <div className="card_footer">
        <small className="cf_text">
          {date} - {author}
        </small>
      </div>
    </div>
  );
}

export default Card;
