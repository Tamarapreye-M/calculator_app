import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Button = (prop) => {
	const { setCalculated, calculated, name, content } = prop;
	const handleDisplay = (ev) => {
		let { value } = ev.target;

		value.toLowerCase() === "x".trim() && (value = " * ");

		value !== "del" && value !== "=" && setCalculated((prev) => prev + value);

		value === "reset" && setCalculated((prev) => "");
		value === "del" && setCalculated((prev) => `${prev}`.slice(0, -1));

		value === "=" &&
			setCalculated((prev) => {
				let valNow = prev.split(" ");
				let cleanUp = valNow
					.map((each) => (isNaN(+each) ? each : `${+each}`))
					.join("");
				return eval(cleanUp);
			});
	};
	return (
		<button className={name} value={content} onClick={handleDisplay}>
			{content}
		</button>
	);
};

export default Button;
