import { Button, Typography } from "@mui/material";
import { styled, alpha } from "@mui/system";

const StyledTypography = styled(Typography)(({ theme }) => ({
	background: `linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 110%)`,
	WebkitBackgroundClip: "text",
	backgrounClip: `text`,
	textFillColor: `transparent`
}));
const coloredBgButton = styled(Button)(({ theme }) => ({
	background: `linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
}));
const coloredBorderDiv = styled("div")(({ theme }) => ({
	border: "1px solid transparent",
	padding: "0",
	backgroundOrigin: "border-box",
	backgroundClip: "content-box , border-box",
	backgroundImage: (theme) =>
		`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
}));
