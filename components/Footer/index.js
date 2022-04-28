import { Grid, Box } from "@mui/material";
import FooterLogoComponent from "./FooterLogoComponent";
import FooterMailing from "./FooterMailing";
import FooterLinks from "./FooterLinks";

const Footer = () => {
	return (
		<>
			<Box sx={{ backdropFilter: "blur(4px)", width: "100%", padding: 4, mt:8 , background:"rgba(0,0,0,0.1)"}}>
				<Grid
					container
					spacing={3}
					sx={{ color: "grey.400", my: 2, width: "100%", mx: "0" }}
				>
					<Grid item xs={12} sm={6} md={4}>
						<FooterLogoComponent />
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<FooterLinks />
					</Grid>
					<Grid item xs={12} md={4}>
						<FooterMailing />
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Footer;
