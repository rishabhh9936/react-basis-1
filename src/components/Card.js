import React from "react";
import { FcLike } from "react-icons/fc";

const Card = () => {
  return (
    <div>
      <div>
        <img src={course.img.url}></img>

        <div>
          <button>
            <FcLike fontsize="1.75rem" />
          </button>
        </div>
      </div>
      <div>
        <p>{course.tittle}</p>
        <p> {course.description}</p>
      </div>
    </div>
  );
};

export default Card;
