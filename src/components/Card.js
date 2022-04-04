import React from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import classes from "./AnimalCard.module.css";

const AnimalCard = (props) => {
  return (
    <div className={classes.AnimalCard}>
      <div className="card">
        <div className="imgName_container">
          <button className={classes.remove} onClick={props.removeAnimal}>
            <RiCloseLine />
          </button>
          <img src={props.imageSource} alt={props.name} />
          <h2 className="animal_name">{props.name}</h2>
        </div>
        <div className={classes.likes_container}>
          <div className={classes.heartCount}>
            <FaHeart />
            <h4 className="Like_Number">{props.like}</h4>
          </div>
          <button className={classes.like_button} onClick={props.handleLike}>
            Likes <FaThumbsUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
