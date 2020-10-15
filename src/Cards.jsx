import React from "react";
import { Card, Button } from "react-bootstrap";
import Images from './Images'


function Cards(props) {
	console.log(props);
	return (
		<>
			<div className="cards">
				<div className="card">
				<Images imgsrc={props.imgsrc}/>
					<Card style={{ width: "18rem" }}>
						{/* <Card.Img variant="top" src={props.imgsrc} className='card__img' /> */}
						<Card.Body className='card__info'>
							<Card.Title className='card__category'>{props.title}</Card.Title>
							<Card.Text className='card__title'>{props.text}</Card.Text>
							<Button className="button" href={props.link}>
								WATCH NOW
							</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		</>
	);
}

export default Cards;
