import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

const FooterLinks = () => {
	return (
		<Box
			sx={{
				maxWidth: "fit-content",
				mx: {
					sm: "auto"
				}
			}}
		>
			<Typography variant="h5" mb={3}>
				Quick Links
			</Typography>
			<Stack direction="column" justifyContent="center">
				<Link href="/pooja">
					<Typography
						variant="body1"
						color="inherit"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						Pooja Appliances
					</Typography>
				</Link>
				<Link href="/creative">
					<Typography
						variant="body1"
						color="inherit"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						Creative Appliances
					</Typography>
				</Link>
				<Link href="/">
					<Typography
						variant="body1"
						color="inherit"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						Home
					</Typography>
				</Link>

				<Link href="/">
					<Typography
						variant="body1"
						color="inherit"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						Categories
					</Typography>
				</Link>
				<Link href="/">
					<Typography
						variant="body1"
						color="inherit"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						Products
					</Typography>
				</Link>
				<Link href="/">
					<Typography
						variant="body1"
						color="inherit"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						Cart
					</Typography>
				</Link>
				<Link href="/">
					<Typography
						variant="body1"
						color="inherit"
						sx={{ "&:hover": { textDecoration: "underline" } }}
					>
						Login
					</Typography>
				</Link>
			</Stack>
		</Box>
	);
};

export default FooterLinks;
