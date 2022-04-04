import React from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import classes from "./AnimalCard.module.css";

const AnimalCard = (props) => {
  return (
    <div className={classes.AnimalCard}>
      <div className="card">
        <div className="imgName_Container">
          <img src={props.imageSource} alt={props.name} />
          <h2 className="animal_name">{props.name}</h2>
        </div>
        <section className="likes">
          <span className="heartCount">
            <FaHeart />
            <h4 className="Like_Number">{props.like}</h4>
          </span>
          <button className="like_button" onClick={props.handleLike}>
            Likes <FaThumbsUp />
          </button>
        </section>
      </div>
    </div>
  );
};

export default AnimalCard;
