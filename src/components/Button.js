import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";

const Button = (prop) => {
	const { setCalculated, calculated, name, content } = prop;

	const initialVals = {
		numbers: "0",
		plus: "",
		divide: "",
		minus: "",
		times: "",
		del: "",
		previous: "",
		current: "",
	};
	const handleDisplay = (ev) => {
		let { value } = ev.target;

		// setCalculated((prev) => (!isNaN(+value) ? +(prev + value) : prev + value));
		value !== "del" && value !== "=" && setCalculated((prev) => prev + value);

		value === "reset" && setCalculated((prev) => "");
		value === "del" && setCalculated((prev) => `${prev}`.slice(0, -1));
		value.toLowerCase() === "x".trim() && (value = " * ");

		value === "=" &&
			setCalculated((prev) => {
				let valNow = prev.split(" ");
				let cleanUp = valNow
					.map((each) => (isNaN(+each) ? each : `${+each}`))
					.join("");
				return eval(cleanUp);
			});
		// console.log(calculated);

		// calculated[0] ==='0' && is

		// setCalculated((prev) => prev + value);

		// console.log(value);
	};
	let num = ["01", "0.01", "002", "+", "-"];
	console.log(num.map((each) => (isNaN(+each) ? each : `${+each}`)).join(""));
	// console.log(Number.isInteger(num));
	return (
		<button className={name} value={content} onClick={handleDisplay}>
			{prop.content}
		</button>
	);
};

export default Button;
