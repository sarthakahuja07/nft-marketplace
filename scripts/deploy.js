const hre = require("hardhat");
const fs = require("fs");

async function main() {
	const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
	const nftMarketplace = await NFTMarketplace.deploy();
	await nftMarketplace.deployed();
	console.log("nftMarketplace deployed to:", nftMarketplace.address);

	fs.writeFileSync(
		"./config.js",
		`
  export const marketplaceAddress = "${nftMarketplace.address}"
  `
	);

	//   add the nftMarketplace address to MARKETPLACE_ADDRESS in .env.local file
	fs.writeFileSync(
		"./.env.local",
		`
MARKETPLACE_ADDRESS=${nftMarketplace.address}
`
	);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
