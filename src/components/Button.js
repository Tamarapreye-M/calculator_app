import React from "react";

const Button = (prop) => {
	const { setCalculated, name, content } = prop;
	const handleDisplay = (ev) => {
		let { value } = ev.target;

		value.toLowerCase() === "x".trim() && (value = " * ");

		value !== "del" && value !== "=" && setCalculated((prev) => prev + value);

		value === "reset" && setCalculated((prev) => "");
		value === "del" && setCalculated((prev) => `${prev}`.slice(0, -1));

		value === "=" &&
			setCalculated((prev) => {
				let valNow = `${prev}`.split(" ");
				let cleanUp = valNow
					.map((each) => (isNaN(+each) ? each : `${+each}`))
					.join("");
				// eslint-disable-next-line
				return cleanUp && cleanUp !== "0" ? eval(cleanUp) : prev;
			});
	};
	return (
		<button className={name} value={content} onClick={handleDisplay}>
			{content}
		</button>
	);
};

export default Button;
