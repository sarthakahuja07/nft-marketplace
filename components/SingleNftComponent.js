import {
	Card,
	CardActionArea,
	CardMedia,
	Box,
	Grid,
	CardContent,
	Avatar,
	Typography,
	CardActions
} from "@mui/material";
import Link from "next/link";
import ETH from "../public/eth.svg";
import { ColoredBgButton } from "../styles/styledComponents";

const SingleNftComponent = ({ id, title, price, creator, image }) => {
	return (
		<>
			<Grid item xs={12} sm={6} md={3}>
				<Card
					raised
					sx={{
						maxWidth: "300px",
						mx: "auto",
						borderRadius: 2,
						padding: 1.5,
						position: "relative",
						minWidth: "200px"
					}}
				>
					<Link href={`/nft/${id}`}>
						<a>
							<CardActionArea>
								<CardMedia
									component="img"
									height="220"
									image="https://i.pravatar.cc/300"
									alt="nft name"
									sx={{
										borderRadius: 2
									}}
								/>
								<CardContent
									sx={{
										borderRadius: 2,
										padding: "0",
										background: "transparent"
									}}
								>
									<Box
										sx={{
											px: 2,
											py: 2
										}}
									>
										<Box
											sx={{
												display: "flex"
											}}
										>
											<Box
												sx={{
													mr: 1
												}}
											>
												<Avatar
													alt="Remy Sharp"
													src="https://i.pravatar.cc/300"
												/>
											</Box>
											<Box>
												<Typography
													variant="body2"
													component="div"
													fontWeight="bold"
													sx={{
														textTransform: "uppercase"
													}}
													mb={0.5}
												>
													{title}
												</Typography>
												<Typography variant="subtitle2" component="div">
													By {creator}
												</Typography>
											</Box>
										</Box>
									</Box>
									<Box
										sx={{
											px: 3,
											py: 1.5,
											pt: 0,
											display: "flex",
											alignItems: "center"
										}}
									>
										<ETH />
										<Typography
											variant="body2"
											fontWeight="bold"
											component="span"
											marginLeft={1}
										>
											{price}
										</Typography>
									</Box>
								</CardContent>
							</CardActionArea>
						</a>
					</Link>
					<CardActions>
						<Box
							sx={{
								px: 3,
								py: 1.5,
								width: "100%"
							}}
						>
							<ColoredBgButton
								sx={{
									width: "100%",
									py: 1.5
								}}
							>
								Buy Now
							</ColoredBgButton>
						</Box>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};

export default SingleNftComponent;
