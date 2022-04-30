import { Grid, Box, Typography, Button } from "@mui/material";
import Lines from "../public/lines.svg";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import HomePageCard from "./HomePageCard";

const HeroContent = () => {
	const theme = useTheme();

	return (
		<>
			<Grid container spacing={12}>
				<Grid item xs={12} sm={6}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "100%",
							minHeight: "400px"
						}}
					>
						<Box>
							<Typography variant="body1"> Discover</Typography>
							<Lines />
						</Box>
						<Box>
							<Typography variant="h4" fontWeight="bold" mb={2}>
								Discover, and collect rare{" "}
								<Typography
									variant="h4"
									component="span"
									fontWeight="bold"
									sx={{
										fontWeight: "bolder",
										background: `linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 110%)`,
										WebkitBackgroundClip: "text",
										backgrounClip: `text`,
										textFillColor: `transparent`
									}}
								>
									{" "}
									Digital Art NFTs
								</Typography>
							</Typography>
							<Typography variant="h6">
								Digital marketplace for crypto collectibles and non-fungible
								tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
							</Typography>
						</Box>
						<Box>
							<Link href="/create-nft">
								<a>
									<Button
										color="white"
										sx={{
											py: 2,
											px: 8,
											fontWeight: "bolder",
											borderRadius: 5,
											minWidth: "200px",
											background: (theme) =>
												`linear-gradient(90.71deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
										}}
									>
										Explore Now
									</Button>
								</a>
							</Link>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<HomePageCard />
				</Grid>
			</Grid>
		</>
	);
};

export default HeroContent;
