import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

const SelectComponent = ({ options, name }) => {
	const [input, setInput] = useState("");

	const handleChange = (event) => {
		setInput(event.target.value);
	};
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id={`select-label-${name}`}>{name}</InputLabel>
				<Select
					labelId={`select-label-${name}`}
					id={`select-${name}`}
					value={input}
					label={name}
					onChange={handleChange}
				>
					{options.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectComponent;
