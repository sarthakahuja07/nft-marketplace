import { Link, Typography } from "@mui/material";
import React from "react";

const FooterMailing = () => {
	return (
		<>
			<Typography variant="h5" mb={3}>
				Contact Us
			</Typography>
			<Typography variant="body1" mb={3}>
				{" "}
				Shop No. 8, Sector 10A, <br />
				Housing Board Colony
				<br />
				Gurugram 122001, Haryana <br /> India
			</Typography>

			<Link
				variant="body1"
				underline="hover"
				color="inherit"
				href="mailto:creative.appliances@yahoo.in"
			>
				Email: creative.appliances@yahoo.in
			</Link>

			<br />
			<Link
				variant="body1"
				underline="hover"
				color="inherit"
				href="tel:9891430101"
			>
				Phone: +91 9891430101
			</Link>
		</>
	);
};

export default FooterMailing;
