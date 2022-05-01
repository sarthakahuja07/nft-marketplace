import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Sidebar from "../components/Sidebar";
import NFTMarketplace from "../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";
import { Box, Container, Typography } from "@mui/material";

const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;
const nftData = {
	tokenId: "1",
	price: "3.02",
	seller: "0x0000000000000000000000000000000000000000",
	owner: "0x0000000000000000000000000000000000000000",
	image: "https://i.imgur.com/qhQY9xv.png",
	name: "Ape Episode #128",
	description: "this is a NFT"
};

export default function Home() {
	const [nfts, setNfts] = useState([]);
	const [loadingState, setLoadingState] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	useEffect(() => {
		loadNFTs();
	}, []);
	async function loadNFTs() {
		const provider = new ethers.providers.JsonRpcProvider();
		const contract = new ethers.Contract(
			marketplaceAddress,
			NFTMarketplace.abi,
			provider
		);
		const data = await contract.fetchMarketItems();

		const items = await Promise.all(
			data.map(async (i) => {
				const tokenUri = await contract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				let price = ethers.utils.formatUnits(i.price.toString(), "ether");
				let item = {
					price,
					tokenId: i.tokenId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
					name: meta.data.name,
					description: meta.data.description
				};
				return item;
			})
		);
		setNfts(items);
		setLoadingState(true);
	}
	async function buyNft(nft) {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(
			marketplaceAddress,
			NFTMarketplace.abi,
			signer
		);

		/* user will be prompted to pay the asking proces to complete the transaction */
		const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
		const transaction = await contract.createMarketSale(nft.tokenId, {
			value: price
		});
		await transaction.wait();
		loadNFTs();
	}

	return (
		<>
			<Sidebar
				mobileOpen={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
			/>
			<Container maxWidth="lg">
				{loadingState && nfts.length ? (
					<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>
				) : (
					<Box
						sx={{
							my: 8,
                            height: "500px",
                            background : (theme) => theme.palette.primary.main
						}}
					>
						hi
					</Box>
				)}
			</Container>
		</>

		// <div className="flex justify-center">
		// 	<div className="px-4" style={{ maxWidth: "1600px" }}>
		// 		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
		// 			{nfts.map((nft, i) => (
		// 				<div key={i} className="border shadow rounded-xl overflow-hidden">
		// 					<img src={nft.image} />
		// 					<div className="p-4">
		// 						<p
		// 							style={{ height: "64px" }}
		// 							className="text-2xl font-semibold"
		// 						>
		// 							{nft.name}
		// 						</p>
		// 						<div style={{ height: "70px", overflow: "hidden" }}>
		// 							<p className="text-gray-400">{nft.description}</p>
		// 						</div>
		// 					</div>
		// 					<div className="p-4 bg-black">
		// 						<p className="text-2xl font-bold text-white">{nft.price} ETH</p>
		// 						<button
		// 							className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
		// 							onClick={() => buyNft(nft)}
		// 						>
		// 							Buy
		// 						</button>
		// 					</div>
		// 				</div>
		// 			))}
		// 		</div>
		// 	</div>
		// </div>
	);
}
