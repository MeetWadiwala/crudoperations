import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const Images = (props) => {
	return <img src={props.imgsrc} alt="muPic" className="card__img" />;
};

export default Images;
