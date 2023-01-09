import React, { useState } from "react";
import Button from "./Button";

const propTypes = [
	{ name: "seven", content: "7" },
	{ name: "eight", content: "8" },
	{ name: "nine", content: "9" },
	{ name: "del", content: "del" },
	{ name: "four", content: "4" },
	{ name: "five", content: "5" },
	{ name: "six", content: "6" },
	{ name: "plus", content: " + " },
	{ name: "one", content: "1" },
	{ name: "two", content: "2" },
	{ name: "three", content: "3" },
	{ name: "minus", content: " - " },
	{ name: "point", content: "." },
	{ name: "zero", content: "0" },
	{ name: "diviide", content: " / " },
	{ name: "mulitply", content: "x" },
	{ name: "reset", content: "reset" },
	{ name: "equals", content: "=" },
];

const Main = (prop) => {
	const [calculated, setCalculated] = useState("");
	const contentProp = propTypes.map((each) => (
		<Button
			key={each.name}
			{...each}
			calculated={calculated}
			setCalculated={setCalculated}
		/>
	));
	return (
		<main>
			<div className="display">
				<p>{calculated || 0}</p>
			</div>
			<div className="row">{contentProp}</div>
		</main>
	);
};

export default Main;
