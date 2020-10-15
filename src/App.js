import React from "react";
import Cards from "./Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Sdata from "./Sdata";

const favSeries = "amazon";

const FavS = () => {
	if (favSeries == "netflix") {
		return (
			<Cards
				key={Sdata[1].id}
				imgsrc={Sdata[1].imgsrc}
				title={Sdata[1].title}
				text={Sdata[1].text}
				link={Sdata[1].link}
			/>
		);
	} else {
		return (
			<Cards
				key={Sdata[3].id}
				imgsrc={Sdata[3].imgsrc}
				title={Sdata[3].title}
				text={Sdata[3].text}
				link={Sdata[3].link}
			/>
		);
	}
};

const ncard = (val) => {
	return (
		<Cards
			key={val.id}
			imgsrc={val.imgsrc}
			title={val.title}
			text={val.text}
			link={val.link}
		/>
	);
};

const App = () => (
	<>
		<h1 className="heading_style">List of top 5 Netlix series in 2020</h1>
		{Sdata.map(ncard)}
		{/* <FavS /> */}
	</>
);

export default App;
